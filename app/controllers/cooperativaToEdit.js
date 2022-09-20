const dbConnection = require('../../config/dbConnections');
const { getCooperativa } = require('../models/cooperativaToEdit');

module.exports.cooperativaToEdit = (app, req, res) => {
    let id = req.query.id
    dbConn = dbConnection();
    getCooperativa(id, dbConn, (error, result) => {
        res.render('editar.ejs', {cooperativa: result});
    });
}