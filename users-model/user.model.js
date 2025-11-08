const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName:{
    type:String,
    required:[true,'firstName must be required']
  },
  lastName: {
    type:String,
    required:[true,'lastName must be required']
  },
  email: { type: String, unique: true },
  password: String,
  avatar: String,
},{timestamps:true});

const User = mongoose.model("User",userSchema);
module.exports = User;

