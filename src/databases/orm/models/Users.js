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
        validate: {
            async isUnique(value, next) {
                const users = await Users.findOne({ where: { username: value } });
                if (users) return next('User must be unique');
                next();
            }
        }
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
            async isUnique(value, next) {
                const users = await Users.findOne({ where: { email: value } });
                if (users) return next('Email is already in use');
                next();
            }
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