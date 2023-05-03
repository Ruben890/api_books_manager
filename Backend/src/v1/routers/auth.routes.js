const { Router } = require('express')
const router = Router()
const verifyToken = require('../../middleware/verifyToken.js')
const { registerUser, loginUser, getUser } = require('../../controller/auth.user.controller.js')


router
    .post('/login', loginUser)//*login user
    .post('/register', registerUser)//*register user
    .get('/', verifyToken, getUser)//* view the user


module.exports = router