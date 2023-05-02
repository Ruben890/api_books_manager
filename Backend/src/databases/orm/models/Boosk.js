const { DataTypes } = require('sequelize')
const sequelize = require('../../database.js');


const Books = sequelize.define('books', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            async isUnique(value, next) {
                const book = await Books.findOne({ where: { title: value } });
                if (book) return next('title must be unique');
                next();
            }
        }
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})

module.exports = Books