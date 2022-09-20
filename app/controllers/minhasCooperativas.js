const dbConnection = require('../../config/dbConnections');
const { getCooperativas } = require('../models/minhasCooperativas');

module.exports.minhasCooperativas = (app, req, res) => {
    const idUsuario = 1;
    dbConn = dbConnection();
    getCooperativas(idUsuario, dbConn, (error, result) => {
        if (error) {
            logger.log({
                level: 'error',
                message: error.message
            });
            res.status(500).render('erros.ejs', { error: error});
            return;
        }
        res.render('minhasCooperativas.ejs', {cooperativas: result});
    });
}