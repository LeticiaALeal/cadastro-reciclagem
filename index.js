const app = require('./config/server');
const routes = require('./app/routes/routes');

routes.home(app);
routes.cadastro(app);
routes.login(app);