const dbConnection = require('../../config/dbConnections');
const { addCooperativa } = require('../models/cadastro');

module.exports.addCooperativaController = (app, req, res) => {
    let cooperativa = req.body;
    dbConn = dbConnection();
    addCooperativa(cooperativa, dbConn, (error, result) => {
      if (error) {
        logger.log({
            level: 'error',
            message: error.message
        });
        res.status(500).render('erros.ejs', { error: error});
        return;
    }
      res.redirect('/');
    });
  }