'use strict';

const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
    res.render('index', {title: 'メニュー'});
});

app.get('/page1', function(req, res) {
    res.render('page1');
});

app.get('/page2', function(req, res) {
    res.render('page2');
});


app.get('/html', function(req, res) {
    res.sendfile('./index.html');
});

var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

