module.exports = {
	addCooperativa: (cooperativa, user, connection, callback) => {
        sql = `insert into cooperativa (nome, endereco, dataInicio, colaboradores, rejeitos, triagem, foto, emailUsuario) values ("${cooperativa.nome}", "${cooperativa.endereco}", "${cooperativa.dataInicio}", "${cooperativa.colaboradores}", "${cooperativa.rejeitos}", "${cooperativa.triagem}", "${cooperativa.foto}", "${user}");`
        connection.query(sql, callback);
    }
}