const { Router } = require('express')
const router = Router()
const verifyToken = require('../../middleware/verifyToken.js')
const { createBooks } = require('../../controller/books.controller.js')

router
    .post('/createBook', verifyToken, createBooks)


module.exports = router