// Start up del server

const express = require('express');
const { Server } = require('http');
const app = express();
const port = 3030;
app.listen(port, () => { console.log('Servidor corriendo en el puerto ' + port);
});



const path = require('path');

const public = path.join(__dirname, 'public');

const statics = express.static(public);

app.use(statics);

app.get('/home', function (req, res) {
    let file = path.join(__dirname, 'views', 'index.html');
    res.sendFile(file);
});

app.get('/', function (req, res) {
    let file = path.join(__dirname, 'views', 'index.html');
    res.sendFile(file);
});

app.get('/babbage', function (req, res) {
    let file = path.join(__dirname, 'views', 'babbage.html');
    res.sendFile(file);
});

app.get('/berners-lee', function (req, res) {
    let file = path.join(__dirname, 'views', 'berners-lee.html');
    res.sendFile(file);
});

app.get('/clarke', function (req, res) {
    let file = path.join(__dirname, 'views', 'clarke.html');
    res.sendFile(file);
});

app.get('/hamilton', function (req, res) {
    let file = path.join(__dirname, 'views', 'hamilton.html');
    res.sendFile(file);
});

app.get('/hopper', function (req, res) {
    let file = path.join(__dirname, 'views', 'hopper.html');
    res.sendFile(file);
});


app.get('/lovelace', function (req, res) {
    let file = path.join(__dirname, 'views', 'lovelace.html');
    res.sendFile(file);
});

app.get('/turing', function (req, res) {
    let file = path.join(__dirname, 'views', 'turing.html');
    res.sendFile(file);
});





