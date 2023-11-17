const express = require('express');
const cors = require('cors');
const USER = require('./models/user');
const connectToDB = require('./config/dbconfig');
const dotenv = require('dotenv');
const app = express();
const PORT = 3001;
const bcryt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = 'abchkah3b3b2b38';

const salt = bcryt.genSaltSync(10);


// app use
app.use(express.json());
app.use(cors({ credentials:true, origin: 'http://localhost:3000' }));
dotenv.config();
// connected with Db
const uri = process.env.MONGODB_URL;
//console.log(uri);
connectToDB();

// register start
app.post('/register', async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    const userExist =await  USER.findOne({email});
    // console.log(userExist)
    if (userExist.email) {
        return res.status(409).json({
            message: 'Already Exist',
        })
    }
    const userDoc = await USER.create({
        email,
        password: bcryt.hashSync(password, salt),
    });
    if (!userDoc) {
        return res.status(400).json({
            message: 'fail to create user',
            success: false
        })
    }

    res.status(200).json({
        success: true,
    })

});
//   --------Register End-----------------
//   ---------- login start----------------
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const userDoc =await  USER.findOne({ email });
    const passCheck =  bcryt.compareSync(password, userDoc.password);
    if (userDoc && passCheck) {
        jwt.sign({ email, id: userDoc._id }, SECRET, {}, (err, token) => {
            if (err) {
                return res.status(400);
            }
            res.status(200).cookie('token', token).json({
                id: userDoc._id,
                email,
            })
        })
    }
    else {
        res.status(400).json({
            success: false,
            message: 'wrong credentials'
        })
    }
})
//   ---------- login End------------------
// app listen
app.listen(PORT, () => {
    console.log("Listen at " + PORT)
})