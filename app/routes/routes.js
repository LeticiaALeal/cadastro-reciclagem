const { home } = require('../controllers/home');
const { login } = require('../controllers/login');
const { editar } = require('../controllers/editar');
const { excluir } = require('../controllers/excluir');
const { addCooperativaController } = require('../controllers/cadastro')
const { check, validationResult } = require('express-validator');
const { cooperativaToEdit } = require('../controllers/cooperativaToEdit');
const { minhasCooperativas } = require('../controllers/minhasCooperativas');

module.exports = {
    home: (app) => {
        app.get('/', function (req, res) {
            home(app, req, res);
        });
    },
    loginForm: (app) => {
        app.get('/login', function (req, res) {
            res.render('login.ejs', {erros: {}, user: {}, user: {}});
        });
    },
    cadastro: (app) => {
        app.get('/cadastro', function (req, res) {
          res.render('cadastro.ejs', {erros: {}, cooperativa: {}, user: req.session.user});
        });
      },
    cadastroCooperativa: (app) => {
        app.post('/cooperativa/salvar', 
        [
            check('nome').isLength({min:3, max:100}).withMessage('Nome deve ter no mínimo 3 caracteres'),
            check('endereco').isLength({min:4, max:250}).withMessage('Endereço deve ter no mínimo 4 caracteres'),
            check('dataInicio').isLength({min:4, max:100}).withMessage('A data de início deve ter no mínimo 4 caracteres'),
            check('colaboradores').isLength({min:1, max:5}).isNumeric().withMessage('A quantidade de colaboradores deve ser numérica'),
            check('rejeitos').isLength({min:1, max:5}).isNumeric().withMessage('O valor de rejeitos deve ser numérica'),
            check('triagem').isLength({min:1, max:5}).isNumeric().withMessage('O valor da triagem deve ser numérica'),
            check('foto').isURL().withMessage('Foto deve conter um link')
        ], (req, res) => {
            const err = validationResult(req);
            let cooperativa = req.body;
            if(!err.isEmpty()){
                let erros = err.array();
                res.render('cadastro.ejs', {erros: erros, cooperativa: cooperativa});
                return
            }
            addCooperativaController(app, req, res); //Novo controller
        })
      },
      editar: (app) => {
        app.get('/editar', function (req, res) {
            cooperativaToEdit(app, req, res)
        })
      },
      editCooperativa: (app) => {
        app.post('/cooperativa/editar', 
        [
            check('nome').isLength({min:3, max:100}).withMessage('Nome deve ter no mínimo 3 caracteres'),
            check('endereco').isLength({min:4, max:250}).withMessage('Endereço deve ter no mínimo 4 caracteres'),
            check('dataInicio').isLength({min:4, max:100}).withMessage('A data de início deve ter no mínimo 4 caracteres'),
            check('colaboradores').isLength({min:1, max:5}).isNumeric().withMessage('A quantidade de colaboradores deve ser numérica'),
            check('rejeitos').isLength({min:1, max:5}).isNumeric().withMessage('O valor de rejeitos deve ser numérica'),
            check('triagem').isLength({min:1, max:5}).isNumeric().withMessage('O valor da triagem deve ser numérica'),
            check('foto').isURL().withMessage('Foto deve conter um link')
        ], (req, res) => {
            editar(app, req, res); //Novo controller
        })
      },
      minhasCooperativas: (app) => {
        app.get('/minhasCooperativas', function (req, res) {
            minhasCooperativas(app, req, res)
        })
      },
      login: (app) => {
        app.post('/autenticarusuario', 
        [
            check('email').isLength({min:6}).isEmail().normalizeEmail().withMessage('E-mail deve ter no mínimo 6 caracteres!'),
        ], (req, res) => {
            const err = validationResult(req);
            let user = req.body;
            if(!err.isEmpty()){
                let erros = err.array();
                res.render('login.ejs', {erros: erros, user: user});
                return
            }
            login(app, req, res); 
        })
      },
      logout: (app) => {
        app.get('/logout', function (req, res) {
            req.session.destroy(function (err) {
                res.redirect('/');
               });
          });
      },

      excluir: (app) => {
        app.get('/excluir', function (req, res) {
            excluir(app, req, res);
        });
    }
}
    