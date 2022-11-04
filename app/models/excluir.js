module.exports = {
	deleteCooperativa: (id, connection, callback) => {
        sql = `delete from cooperativa where id = "${id.id}";`
        connection.query(sql, callback);
    }
}