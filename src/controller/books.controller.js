const Books = require('./../databases/orm/models/Boosk.js')

const createBooks = async (req, res) => {
    try {
        const { name, author, publicationDate } = req.body
        Books.create({ name, author, publicationDate, userId: res.user.id })
        res.status(201).json({ message: 'Book created' })
    } catch (err) {
        console.error(err)
        res.status(500).send({ message: "Internal Server Error" });
    }
}


module.exports = {
    createBooks
}


