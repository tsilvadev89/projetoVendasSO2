const mysql = require('mysql2');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "fatec",
    database: "so2"
});

module.exports = con;
