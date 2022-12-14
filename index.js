const app = require('./config/server');
const routes = require('./app/routes/routes');

routes.home(app);
routes.login(app);
routes.loginForm(app);
routes.cadastro(app);
routes.cadastroCooperativa(app);
routes.editar(app);
routes.editCooperativa(app);
routes.minhasCooperativas(app);
routes.excluir(app);
routes.logout(app);