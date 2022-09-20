module.exports = {
    getCooperativa: (id, connection, callback) => {
        const sql = `select * from cooperativa where id = "${id}";`;
        connection.query(sql, callback);
    }
}