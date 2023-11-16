const mongoose=require('mongoose');

const  connectToDB=async (url)=>{
   // to pass url show error
   const conect=await  mongoose.connect(url)
   if(conect){
    console.log('conected Db Sucess');
   }
   else{
    console.log("Not connected with Db");
   }
};

module.exports=connectToDB;