const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const config = require('./.config.json').mongo

const { i18n, geolocation, project, event} = require('./models')
const {json} = require("express");

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

//test
app.get("/test", (req, res) => {
    console.log(req.query)
    res.sendStatus(353)
});

//getGeo
app.get("/getGeo", async (req, res) => {
    let geo = await geolocation.findOne({geoID: req.query.geoID}).exec()
    res.send(geo)
});

app.get("/getProject", async (req, res) => {
    let proj = await project.findOne({geoID: req.query.geoID, month: req.query.month}).exec()
    res.send(proj)
});

app.get("/getEvents", async (req, res) => {
    let events = await event.find({geoID: req.query.geoID, month: req.query.month}).sort('date').exec()
    res.send(
        JSON.parse(
            JSON.stringify(events)
        )
    );
});


function addGeolocationData() {
    const geo = new geolocation({
        geoID: 1,
        title: {
            ru: "Намыв",
            en: "Alluvion"
        }
    });
    geo.save(function(err){
        mongoose.disconnect();  // отключение от базы данных

        if(err) return console.log(err);
        console.log("Сохранен объект", geo);
    });
}

function addProjectData() {
    const proj = new project({
        geoID: 1,
        title: {
            ru: "Эколог",
            en: "Ecologist"
        },
        month: 1
    });
    proj.save(function(err){
        mongoose.disconnect();  // отключение от базы данных

        if(err) return console.log(err);
        console.log("Сохранен объект", proj);
    });
}

function addEventsData() {
    const eventOne = new event({
        geoID: 1,
        date: new Date('2022-01-10'),
        month: 1,
        time: '14:00',
        title: {
            ru: 'доклад эколога',
            en: 'ecologist report'
        },
        speaker: {
            ru: 'Абрамова Вероника',
            en: 'Abramova Veronika'
        }
    });
    eventOne.save(function(err){
        mongoose.disconnect();  // отключение от базы данных
        if(err) return console.log(err);
        console.log("Сохранен объект", eventOne);
    });
    const eventTwo = new event({
        geoID: 1,
        date: new Date('2022-01-14'),
        month: 1,
        time: '19:00',
        title: {
            ru: 'встреча на берегу',
            en: 'meeting on the shore'
        }
    });
    eventTwo.save(function(err){
        mongoose.disconnect();  // отключение от базы данных
        if(err) return console.log(err);
        console.log("Сохранен объект", eventOne);
    });
};

// addProjectData()
// addEventsData()