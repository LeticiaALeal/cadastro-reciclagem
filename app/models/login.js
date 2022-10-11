module.exports = {
    authUser: (user, connection, callback) => {
        const sql = `select * from usuario where email = "${user.email}" and senha = "${user.senha}";`;
        connection.query(sql, callback);
    }
}