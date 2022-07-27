const express = require('express')

const app = express()

app.listen('3000')

// middleware >> é a ponte entre as requisições
app.use(express.json())

app.route('/').post((req, res) => {
    const {nome, cidade, Livros_Favoritos} = req.body
   res.send(Livros_Favoritos)
})