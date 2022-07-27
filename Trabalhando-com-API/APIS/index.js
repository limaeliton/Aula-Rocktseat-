const express = require('express')

const app = express()

// server
app.listen('3000')


//app.route('/').get((req, res) => res.send("hello"))
//app.route('/sobre').get((req, res) => res.send("hello sobre"))

// middleware >> é a ponte entre as requisições
//app.use(express.json())

//app.route('/').post((req, res) => res.send(req.body))


// middleware >> é a ponte entre as requisições
//app.use(express.json())

//let author = "Eliton"

//app.route('/').get( (req, res) => res.send(author))

//app.route('/').put ((req, res) => {
    //author = req.body.author
    //res.send(author)
//})

app.route('/:identificador').delete((req, res) => {
    res.send(req.params.identificador)
})