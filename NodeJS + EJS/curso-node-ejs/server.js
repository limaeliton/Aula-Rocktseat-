// 'express vai criar um servidor pra mostrar tudo que está sendo feito dentro do navegador 
const express = require('express');
const app = express();

// view engine >> ferramenta para renderizar o html  vai usar o ejs para isso.
// 
app.set("view engine", "ejs")

app.get("/" ,function (req, res) {
    const items = [
        {
            title: "D",
            message: "esenvolver aplicações/serviços de forma fácil"
        },
        {
            title: "E",
            message: "JS usa JavaScript para renderizar HTML"
        },
        {
            title: "M",
            message: "uito fácil de usar"
        },
        {
            title: "A",
            message: "ltamente coizificado"
        },
        {
            title: "I",
            message: "nstall ejs"
        },
        {
            title: "S",
            message: "intaxe simples"
        },
               
    ];

    const subtitle = "Uma linguagem de modelagem para a criação de paginas html utilizando JS"
    
    res.render("pages/index" ,{
            qualitys: items,
            subtitle: subtitle
    } );
})

app.get("/sobre" ,function (req, res) {
    res.render("pages/about");
})

// listen faz o app rodar. listen fica ouvindo a porta (8080)
app.listen(8080); 
// se for feita alguma alteração em arquivos JS é preciso parar o servidor do NODE CTRL + C e colocar para rodar novamente ( node server.js )

// quando e feita alguma alteração em arquivo EJS não precisa parar o servidor.
console.log("servidor funcionando");