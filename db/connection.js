require('dotenv').config();
const mysql = require('mysql2');

let connection;

connection = mysql.createConnection({
    host: '127.0.0.1',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
},console.log('connected to database'));

module.exports = connection;