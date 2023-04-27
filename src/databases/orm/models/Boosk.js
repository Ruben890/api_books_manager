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
})

module.exports = Books