module.exports = {
	editCooperativa: (cooperativa, id, user, connection, callback) => {
        sql = `update cooperativa set nome = "${cooperativa.nome}",endereco = "${cooperativa.endereco}",dataInicio = "${cooperativa.dataInicio}",colaboradores = "${cooperativa.colaboradores}",rejeitos =  "${cooperativa.rejeitos}", triagem = "${cooperativa.triagem}", foto =  "${cooperativa.foto}", emailUsuario = "${user}" where id = "${id.id}";`
        connection.query(sql, callback);
    }
}