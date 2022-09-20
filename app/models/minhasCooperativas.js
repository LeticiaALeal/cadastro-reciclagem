module.exports = {
    getCooperativas: (id, connection, callback) => {
        const sql = `select * from cooperativa where idUsuario = "${id}";`;
        connection.query(sql, callback);
    }
}