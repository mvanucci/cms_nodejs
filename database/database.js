const Sequelize = require('sequelize');
const connection = new Sequelize('guiapress', 'root', 'asd123',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;