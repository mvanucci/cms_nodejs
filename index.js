const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');

// View Engine
app.set('view engine', 'ejs');

//Static Files
app.use(express.static('public'));

//Body parse
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Connection database
connection.authenticate().then(success => {
    console.log('Conectado com sucesso ao banco de dados');
}).catch(err => {
    console.log('Erro ao conectar ao banco de dados. '+ err);
});

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(8080, () => {
    console.log('Servidor de aplicação rodando normalmente')
});
