module.exports = {
    getCooperativas: (user, connection, callback) => {
        const sql = `select * from cooperativa where emailUsuario = "${user}";`;
        connection.query(sql, callback);
    }
}