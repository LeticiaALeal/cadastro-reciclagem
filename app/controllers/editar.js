const dbConnection = require('../../config/dbConnections');
const { editCooperativa } = require('../models/editar');

module.exports.editar = (app, req, res) => {
    let cooperativa = req.body
    let id = req.query
    dbConn = dbConnection();
    editCooperativa(cooperativa, id, dbConn, (error, result) => {
        res.redirect('/');
      });
}