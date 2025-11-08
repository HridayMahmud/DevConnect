
const  mongoose = require('mongoose');
require('dotenv').config();

const db_connection = async()=>{
   try{
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('mongo db is connected');
   }
   catch(error){
    console.log("mongodb connection error:",error);
   }

}
module.exports = db_connection;