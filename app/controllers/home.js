
const dbConnection = require('../../config/dbConnections');
const { getCooperativas } = require('../models/home');

module.exports.home = (app, req, res) => {
    getCooperativas(dbConnection(), (error, result) => {
     res.render('home.ejs', {cooperativas: result});
    });
}; 