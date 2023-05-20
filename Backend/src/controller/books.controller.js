const { response } = require('express');
const Books = require('./../databases/orm/models/Boosk.js')
const { Op } = require('sequelize');

const createBooks = async (req, res) => {
    try {
        const { title, author, description, publisher, year, } = req.body;

        // Verificar si el libro ya existe
        const existingBook = await Books.findOne({ where: { title } });
        if (existingBook) {
            return res.status(400).json({ message: "Book with this title already exists" });
        }

        // subir la imagen y obtener su URL
        const file = req.file;
        const image = file ? `${req.protocol}://${req.get('host')}/uploads/${file.filename}` : null;



        // Crear el libro
        await Books.create({ title, author,publisher, description, year, userId: res.user.id, image });

        // Enviar respuesta con éxito
        res.status(201).json({ message: 'Book created' });
    } catch (error) {
        console.error(error);

        // Enviar respuesta con error
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const getBooksAlls = async (req, res = response) => {
    try {
        const { page = 0, size = 5, search = '' } = req.query;

        const query = {
            limit: +size,
            offset: (+page) * (+size),
            order: [['id', 'DESC']],
            where: {
                [Op.or]: [
                    { title: { [Op.substring]: search } },
                    { author: { [Op.substring]: search } }
                ]
            }
        };

        const { count, rows } = await Books.findAndCountAll(query);

        res.status(200).json({
            message: "http ok",
            total: count,
            data: rows
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

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
        const deleteUser = await Books.destroy({ where: { id: req.params.id } })
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


