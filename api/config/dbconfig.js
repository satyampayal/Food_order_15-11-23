const mongoose=require('mongoose');

const  connectToDB=async ()=>{
   // to pass url show error
   const conect=await  mongoose.connect("mongodb+srv://satyampayal10:jeemain1satyam@foodorder.twcuw9l.mongodb.net/?retryWrites=true&w=majority")
   if(conect){
    console.log('conected Db Sucess');
   }
   else{
    console.log("Not connected with Db");
   }
};

module.exports=connectToDB;