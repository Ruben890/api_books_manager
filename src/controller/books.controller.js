const Books = require('./../databases/orm/models/Boosk.js')

const createBooks = async (req, res) => {
    try {
        const { title, author, year } = req.body;

        // Verificar si el libro ya existe
        const existingBook = await Books.findOne({ where: { title } });
        if (existingBook) {
            return res.status(400).json({ message: "Book with this title already exists" });
        }

        // Crear el libro
        await Books.create({ title, author, year, userId: res.user.id });

        // Enviar respuesta con éxito
        res.status(201).json({ message: 'Book created' });
    } catch (error) {
        console.error(error);

        // Enviar respuesta con error
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const getBooksAlls = async (req, res) => {
    try {
        const gerBooksAll = await Books.findAll();
        res.status(200).json({
            message: "http ok",
            data: gerBooksAll
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const getOneBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Books.findOne({ where: { id } });
        res.status(200).json({
            message: "http ok",
            data: book
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const updateBook = async (req, res) => {
    try {
        // verificar si el libro le pertenece al usuario
        const book = await Books.findOne({ where: { id: req.params.id, userId: res.user.id } });
        if (!book) {
            return res.status(404).json({ message: "Book not found or does not belong to this user." });
        }

        const { title, author, year } = req.body;
        await book.update({ title, author, year });

        res.status(200).json({
            message: "Book updated",
            data: book
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const deleteBook = async (req, res) => {
    try {
        // verificar si el libro le pertenece al usuario
        const book = await Books.findOne({ where: { id: req.params.id, userId: res.user.id } });
        if (!book) return res.status(404).json({ message: "Book not found or does not belong to this user." });

        // borrar el libro
        const deleteUser = await Users.destroy({ where: { id: req.params.id } })
        if (!deleteUser) return res.status(404).json({ message: "User not found", })
        res.status(201).json({
            message: "delete user successfully"
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = {
    createBooks,
    getBooksAlls,
    getOneBook,
    updateBook,
    deleteBook
}


