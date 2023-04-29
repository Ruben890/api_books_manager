const { Router } = require('express')
const router = Router()
const { registerUser, loginUser, getUser, logaud } = require('../../controller/auth.user.controller.js')


router
    .post('/login', loginUser)//*login user
    .post('/register', registerUser)
    .get("/user", getUser)//*view user


module.exports = router