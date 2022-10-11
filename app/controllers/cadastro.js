const dbConnection = require('../../config/dbConnections');
const { addCooperativa } = require('../models/cadastro');

module.exports.addCooperativaController = (app, req, res) => {
    let cooperativa = req.body;
    let user = req.session.user;
    dbConn = dbConnection();
    addCooperativa(cooperativa, user,dbConn, (error, result) => {
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