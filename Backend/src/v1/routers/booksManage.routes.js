const { Router } = require('express')
const router = Router()
const verifyToken = require('../../middleware/verifyToken.js')
const upload = require('../../middleware/uploapFile.js')
const { createBooks, getBooksAlls, getOneBook, updateBook, deleteBook } = require('../../controller/books.controller.js')

router
    .post('/createBook',upload, verifyToken, createBooks)
    .get('/', getBooksAlls)
    .get('/:id', getOneBook)
    .put("/updateBook/:id", verifyToken, updateBook)
    .delete("/deleteBook/:id", verifyToken, deleteBook)

module.exports = router