const { Router } = require('express')
const router = Router()
const verifyToken = require('../../middleware/verifyToken.js')
const { createBooks, getBooksAlls } = require('../../controller/books.controller.js')

router
    .post('/createBook', verifyToken, createBooks)
    .get('/', getBooksAlls)


module.exports = router