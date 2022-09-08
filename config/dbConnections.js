const mysql = require('mysql');

const host = 'localhost';
const database = 'cooperativas';
const user = 'root';
const password = 'leticia2022';

module.exports = () => {
    return  dbConn = mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: database
    });
};