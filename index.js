const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.render('index', {movies: []});
});

app.post('/', function(req, res) {
    let movie = req.body.name;
    let url = `http://www.omdbapi.com/?s=${movie}&apikey=ff31c86d`;
    request(url, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            let data = JSON.parse(body).Search;
            res.render('index', {movies: data});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log('Movie Search App has Started!');
});