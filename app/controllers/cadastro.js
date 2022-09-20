const dbConnection = require('../../config/dbConnections');
const { addCooperativa } = require('../models/cadastro');

module.exports.addCooperativaController = (app, req, res) => {
    let cooperativa = req.body;
    dbConn = dbConnection();
    addCooperativa(cooperativa, dbConn, (error, result) => {
      res.redirect('/');
    });
  }