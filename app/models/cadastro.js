module.exports = {
	addCooperativa: (cooperativa, connection, callback) => {
        sql = `insert into cooperativa (nome, endereco, dataInicio, colaboradores, rejeitos, triagem, foto) values ("${cooperativa.nome}", "${cooperativa.endereco}", "${cooperativa.dataInicio}", "${cooperativa.colaboradores}", "${cooperativa.rejeitos}", "${cooperativa.triagem}", "${cooperativa.foto}");`
        connection.query(sql, callback);
    }
}