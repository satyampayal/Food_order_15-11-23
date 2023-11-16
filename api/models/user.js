const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        min:6,
    },
    password:{
        type:String,
        min:4
    }

},{
    timestamps:true
});

const USER=mongoose.model('user',userSchema);

module.exports=USER;