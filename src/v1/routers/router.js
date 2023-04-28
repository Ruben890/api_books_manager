const express = require('express');
const router = express.Router();
const { RegisterUser, loginUser } = require('../../controller/auth.user.controller.js')
const booksController = require('../../controller/books.controller.js');

router
    .post('/login', loginUser)//*login user
    .post('/register', RegisterUser)//* registers user
    .get('/user') //* view user


module.exports = router