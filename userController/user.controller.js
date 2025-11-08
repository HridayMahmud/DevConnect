
const bcrypt = require('bcryptjs');
const validator = require('validator');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../users-model/user.model');

//register
const register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        //isExisted email
        if (!email) {
            return res.status(400).json({
                message: "email must required"
            });
        }

        //email validation
        if (!validator.isEmail(email)) {
            return res.status(400).json({
                message: "Invalid email format"
            });
        }

        const exists = await User.findOne({ email });
        if (exists) {
            return res.status(409).json({
                message: "user already exists"
            });
        }
        //new user created
        else {
            const hash = await bcrypt.hash(password, 10);
            const newUser = await User.create({ firstName, lastName, email, password: hash });
            return res.status(200).json({ message: "user registered successfully", newUser });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: error.message
        });
    }

}

//login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const loggedUser = await User.findOne({ email });
        if (!loggedUser) {
            return res.status(404).json({
                message: "user not found"
            });
        }

        const match =  bcrypt.compare(password, loggedUser.password);
        if (!match) {
            return res.status(500).json({
                message: "password not matched"
            });
        }
        //token generation
        const token = jwt.sign({ id: loggedUser._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        if (token) {
            return res.json({
                message: "user successfully logged In",
                data: { token, loggedUser }
            });
        }
        else {
            return res.status(400).json({
                message: "logIn failed ,session time out"
            });
        }
    }

    catch (error) {
        return res.status(404).json({
            message: "log in failed"
        })
    }
}
module.exports = { register, login }
