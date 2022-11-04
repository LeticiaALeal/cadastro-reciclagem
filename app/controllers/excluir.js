const dbConnection = require('../../config/dbConnections');
const { deleteCooperativa } = require('../models/excluir');

module.exports.excluir = (app, req, res) => {
    let id = req.query;
    dbConn = dbConnection();
    deleteCooperativa(id, dbConn, (error, result) => {
        res.redirect('/minhasCooperativas');
      });

      console.log('Cheguei no controller do excluir');
}