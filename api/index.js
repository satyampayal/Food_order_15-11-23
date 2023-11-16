const express=require('express');
const cors=require('cors');
const USER=require('./models/user');
const connectToDB=require('./config/dbconfig');
const dotenv=require('dotenv');
const app=express();
const PORT=3001;


// app use
app.use(express.json());
app.use(cors({origin:'http://localhost:3000'}));
dotenv.config();
// connected with Db
      const url=process.env.MONGODB_URL;
connectToDB(url);
// register start
app.post('/register',async (req,res)=>{
    console.log(req.body);
    const {email,password}=req.body;
    const userExist=USER.findOne({email});
    if(userExist){
        return res.status(409).json({
            message:'Already Exist',
        })
    }
    const userDoc=await USER.create({
        email,
        password
    });
    if(!userDoc){
        return res.status(400).json({
            message:'fail to create user',
            success:false
        })
    }

    res.status(200).json({
        success:true,
    })

    
});
// app listen
app.listen(PORT,()=>{
    console.log("Listen at "+PORT)
})