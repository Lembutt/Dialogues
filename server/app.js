const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const config = require('./.config.json').mongo

const {i18n, geolocation, event} = require('./models')

const projRoot = path.join(__dirname, '..');

const mongoURI = `mongodb+srv://${config.user}:${config.pwd}@${config.url}/${config.workingDB}`

const app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use('/', express.static(path.join(projRoot, 'public')));

async function start() {
    try {
        await mongoose.connect(mongoURI);
        app.listen(3000, () => {
            console.log("Application started and Listening on port 3000");
        });
    } catch (e) {
        console.log(e)
    }
}

start()

app.get("/", (req, res) => {
    res.sendFile('public/html/index.html', {root: projRoot});
});

app.get("/test", (req, res) => {
    console.log('Got!')
    res.sendStatus(353)
});