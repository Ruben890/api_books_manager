const Users = require('../databases/orm/models/Users.js');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { use } = require('../app.js');
require('dotenv').config()


const RegisterUser = async (req, res) => {
    try {
        const { username, first_name, last_name, email, password } = req.body;
        const user = await Users.create({ username, first_name, last_name, email, password });
        res.status(201).json({
            message: 'registered successfully',
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: `Server error: ${error.message}` });
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Users.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ error: 'Invalid email' });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        const token = jwt.sign({ email, password, exp: Date.now() + 24 * 60 * 60 * 1000 }, process.env.JWT_SECRET)

        return res.status(200).json({
            message: 'Logged in successfully',
            token: token
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: `Server error: ${error.message}` });
    }
};

const GetUser = (req, res) => { 
    
}

module.exports = {
    RegisterUser,
    loginUser
}