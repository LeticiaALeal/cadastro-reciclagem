const dbConnection = require('../../config/dbConnections');
const { editCooperativa } = require('../models/editar');

module.exports.editar = (app, req, res) => {
    let cooperativa = req.body
    let id = req.query
    let user = req.session.user;
    dbConn = dbConnection();
    editCooperativa(cooperativa, id, user, dbConn, (error, result) => {
        res.redirect('/');
      });
}