const dbConnections = require('../../config/dbConnections');
const { authUser } = require('../models/login');

module.exports.login = (app, req, res) => {
    let user = req.body
    dbConn = dbConnections();

    authUser(user, dbConn, (error, result) => {
        if (error) {
            logger.log({
                level: 'error',
                message: error.message
            });
            res.status(500).render('erros.ejs', { error: error});
            return;
        }
        if(result.length > 0){
            req.session.loggedIn = true;
            req.session.user = user.email;
            res.redirect('/');
        } else {
            logger.log({
                level: 'error',
                message: error.message
            });
            res.status(500).render('erros.ejs', { error: error});
        }
        
    });

} 