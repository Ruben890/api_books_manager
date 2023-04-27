const Users = require('../databases/orm/models/Users.js');
const bcrypt = require('bcrypt')

const RegisterUser = async (req, res) => {
    try {
        const { username, first_name, last_name, email, password } = req.body;
        const user = await Users.create({ username, first_name, last_name, email, password });
        res.status(201).json({
            message: 'registered successfully',
        });
    } catch (error) {
        console.e(error);
        res.status(500).send({ message: `Server error: \n (${error})` });
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

        return res.status(200).json({
            message: 'Logged in successfully',
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};



module.exports = {
    RegisterUser,
    loginUser
}