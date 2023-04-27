const Users = require('../databases/orm/models/Users.js');

const RegisterUser = async (req, res) => {
    try {
        const { username, first_name, last_name, email, password } = req.body;
        const user = await Users.create({ username, first_name, last_name, email, password });
        res.status(200).json({
            message: 'registered successfully',
            data: user
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: `Server error: \n (${error})` });
    }
}

module.exports = {
    RegisterUser
}