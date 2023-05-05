const { DataTypes } = require('sequelize')
const sequelize = require('../../database.js')
const bcrypt = require('bcrypt')
const Books = require('./Boosk.js')

const Users = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image:{
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    }, password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    hooks: {
        beforeCreate: async (user) => {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
        }
    }, timestamps: false
})

Users.hasMany(Books, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
    sourceKey: 'id'
})
Books.belongsTo(Users, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
    targetId: 'id'
})
module.exports = Users