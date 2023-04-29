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




module.exports = {
    createBooks
}


