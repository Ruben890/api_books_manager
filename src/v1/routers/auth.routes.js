const { Router } = require('express')
const router = Router()
const { registerUser, loginUser } = require('../../controller/auth.user.controller.js')


router
    .post('/login', loginUser)//*login user
    .post('/register', registerUser)//*register user


module.exports = router