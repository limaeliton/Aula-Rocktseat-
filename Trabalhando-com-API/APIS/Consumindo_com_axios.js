const express = require('express');
const axios = require('axios');

const app = express()

app.listen('3000')

app.route('/').get((req, res) => {
   axios.get('https://api.github.com/users/limaeliton')
   .then(result => res.send(`<img scr="${result.data.avatar_url}"/>`))
   .catch(error => console.log(error))
})