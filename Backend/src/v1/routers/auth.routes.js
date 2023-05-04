const { Router } = require('express')
const router = Router()
const verifyToken = require('../../middleware/verifyToken.js')
const upload = require('../../middleware/uploapFile.js')
const { registerUser, loginUser, getUser } = require('../../controller/auth.user.controller.js')


router
    .post('/login', loginUser)//*login user
    .post('/register', upload.single("image"), registerUser)//*register user
    .get('/me', verifyToken, getUser)//* view the user


module.exports = router