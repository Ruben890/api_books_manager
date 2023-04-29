const { DataTypes } = require('sequelize')
const sequelize = require('../../database.js');


const Books = sequelize.define('books', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    author: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fecha_de_publicacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW // establece la fecha actual como valor predeterminado
    }
})

module.exports = Books