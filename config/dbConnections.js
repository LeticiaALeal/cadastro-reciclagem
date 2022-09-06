const mysql = require('mysql');

const host = 'localhost';
const database = 'cooperativas';
const user = 'root';
const password = 'Leh2019';

module.exports = () => {
    return  dbConn = mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: database
    });
};