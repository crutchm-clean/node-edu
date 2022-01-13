require('dotenv').config()
const {Sequelize} = require('sequelize')
module.exports = new Sequelize(
    'store',
    'postgres',
    'root',
    {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432
    }
)