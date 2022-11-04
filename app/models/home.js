module.exports = {
    getCooperativas: (connection, callback) => {
        const sql = 'select * from cooperativa;';
        connection.query(sql, callback);
    }
}