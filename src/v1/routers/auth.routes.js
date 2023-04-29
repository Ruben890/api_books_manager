const { Router } = require('express')
const router = Router()
const verifyToken = require('../../middleware/verifyToken.js');
const { registerUser, loginUser, getUser, logoutUser } = require('../../controller/auth.user.controller.js')


router
    .post('/login', loginUser)//*login user
    .post('/register', registerUser)//*register user
    .post('/logout', verifyToken, logoutUser)//* logout user
    .get("/user", verifyToken, getUser)//*view user



module.exports = router