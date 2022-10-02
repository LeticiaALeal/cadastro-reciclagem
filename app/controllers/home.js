
const dbConnection = require('../../config/dbConnections');
const { getCooperativas } = require('../models/home');
const logger = require("../../config/logger");

module.exports.home = (app, req, res) => {
    getCooperativas(dbConnection(), (error, result) => {
        if (error) {
            logger.log({
                level: 'error',
                message: error.message
            });
            res.status(500).render('erros.ejs', { error: error});
            return;
        }
     res.render('home.ejs', {cooperativas: result});
    });
}; 