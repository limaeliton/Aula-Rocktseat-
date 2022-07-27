const express = require('express');

const app = express();

app.listen('3000')

app.route('/').get( (req, res) => res.send(req.query.nome))
//está imendando a rota
app.route('/about/user').get( (req, res) => res.send(req.query))