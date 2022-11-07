let express = require('express');
let expressSession = require('express-session');

let app = express();
let port = process.env.PORT || 3000;

app.set('view engine', "ejs");
app.use(express.static('./public'));
app.set('views', "./app/views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(expressSession({
    secret: "prontasparaotcc",
    resave: false,
    saveUninitialized: false
}))

app.listen(port, function(){
    console.log('Servidor rodando com express na porta', port)
});

module.exports = app;