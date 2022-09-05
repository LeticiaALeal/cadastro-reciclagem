const { home } = require('../controllers/home');
const { cadastro } = require('../controllers/cadastro');
const { login } = require('../controllers/login');

module.exports = {
    home: (app) => {
        app.get('/', function (req, res) {
            home(app, req, res);
        });
    },
    cadastro: (app) => {
        app.get('/cadastro', function (req, res) {
            cadastro(app, req, res);
        });
    },
    login: (app) => {
        app.get('/login', function (req, res) {
            login(app, req, res);
        });
    }
}
    