'use strict';

const express = require('express');
const app = express();
const ejs = require('ejs')

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', {title: 'メニュー'});
});

app.get('/html', function(req, res) {
    res.sendfile('./index.html');
});

var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

