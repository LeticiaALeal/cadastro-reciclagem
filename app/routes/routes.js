const { home } = require('../controllers/home');
const { login } = require('../controllers/login');
const { addCooperativaController } = require('../controllers/cadastro')
const { check, validationResult } = require('express-validator');

module.exports = {
    home: (app) => {
        app.get('/', function (req, res) {
            home(app, req, res);
        });
    },
    login: (app) => {
        app.get('/login', function (req, res) {
            login(app, req, res);
        });
    },
    cadastro: (app) => {
        app.get('/cadastro', function (req, res) {
          res.render('cadastro.ejs', {erros: {}, cooperativa: {}});
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
      }
}
    