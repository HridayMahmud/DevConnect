const express = require('express');
const { register, login } = require('../userController/user.controller');


const router = express.Router();

router.get("/",(req,res)=>{
    res.send("welcome to homepage");
});
//create user route
router.post("/register",register);
router.post("/login",login);

module.exports = router;