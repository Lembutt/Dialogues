const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const config = require('./.config.json').mongo

const {i18n, geolocation, event} = require('./models')


const app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


const projRoot = path.join(__dirname, '..');

const mongoURI = `mongodb+srv://${config.user}:${config.pwd}@${config.url}/${config.workingDB}`

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
    res.sendFile('index.html', {root: projRoot});
});

//styles
app.get("/css/styles.css", (req, res) => {
    res.sendFile('css/styles.css', {root: projRoot});
});

//js
app.get("/js/app.js", (req, res) => {
    res.sendFile(req.path, {root: projRoot});
});

//images
app.get("/images/*", (req, res) => {
    res.sendFile(req.path, {root: projRoot});
});

app.get("/test", (req, res) => {
    console.log('Got!')
    res.sendStatus(353)
});