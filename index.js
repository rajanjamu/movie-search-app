const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

let movie = `harry`;
let url = `http://www.omdbapi.com/?s=${movie}&apikey=ff31c86d`

request(url, function(error, response, body) {

});

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(3000, function() {
    console.log('Express server has started!');
});