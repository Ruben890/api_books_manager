const express = require('express');
const router = express.Router();
const { RegisterUser } = require('../../controller/users.controller.js')
const booksController = require('../../controller/books.controller.js');

router
    .post('/login',)//*login user
    .post('/register', RegisterUser)//* registers user
    .get('/user') //* view user


module.exports = router