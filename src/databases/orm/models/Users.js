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
        set(value) {
            const salt = bcrypt.genSaltSync();
            const hashedPassword = bcrypt.hashSync(value, salt);
            this.setDataValue('password', hashedPassword);
        }
    }
}, {
    hooks: {
        beforeCreate: (user) => {
            user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync());
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