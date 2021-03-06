const express = require('express');
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const path = require('path');
const config = require('./.config.json').mongo
const i18n = require('./src/translations')
const MonthScroll = require('./src/monthScroll')
let Date = require('./src/utils')
let User = require('./src/user')

const { geolocation, project, event, eventApplication} = require('./src/models')
const {json} = require("express");

const projRoot = __dirname;

const mongoURI = `mongodb+srv://${config.user}:${config.pwd}@${config.url}/${config.workingDB}`;

const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
    allowProtoMethodsByDefault: true
});


app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views');

let user = new User;
let monthScroll = new MonthScroll;
let translations = new i18n;

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

start();

app.get("/", (req, res) => {
    let lang = req.query.lang || user.setLang(req.headers["accept-language"]);
    res.redirect(`/${lang}?month=${monthScroll.__getCurrentMonth()}`);
});

async function processLangReq (req, res) {
    const month = req.query.month || monthScroll.__getCurrentMonth();
    let lang = req.path[1]+req.path[2];

    const geo = await geolocation.findOne({geoID: 1}).lean().exec();
    const proj = await project.findOne({geoID: 1, month: month}).lean().exec();
    let events = await event.find({geoID: 1, month: month}).sort('date').lean().exec();
    for (let event of events) {
        event.dateToShow = (new Date(event.date)).ddmmyy();
        event.speakerExists = !(event.speaker[lang] === ' ');
    }
    res.render('index', {
        trans: translations.translate(lang),
        ru: lang === 'ru',
        geolocation: geo.title[lang],
        scroll: monthScroll.create(lang, month),
        evs: events,
        proj: proj,
    });
}

app.get("/en", processLangReq);
app.get("/ru", processLangReq);

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

app.post("/postEventApplication", async (req, res) => {
    console.log(req.body)
    /*try{
        const qData = req.query
        const evAppl = new eventApplication({
            name: qData.name,
            profession: qData.profession,
            country: qData.country,
            city: qData.city,
            theme: qData.theme,
            themeDescription: qData.themeDescription,
            phone: qData.phone,
            email: qData.email,
            otherContacts: qData.otherContacts,
            geoID: qData.geoID
        });
        evAppl.save(function (err) {
            mongoose.disconnect();  // ???????????????????? ???? ???????? ????????????
            if (err) return console.log(err);
            console.log("???????????????? ????????????", evAppl);
        });
        res.status(200)
        res.send(
            JSON.parse(
                JSON.stringify(evAppl)
            )
        );
    } catch (err) {
      res.status(-200)
      res.send({error: err})
    }*/
});


function addGeolocationData() {
    const geo = new geolocation({
        geoID: 1,
        title: {
            ru: "??????????",
            en: "Alluvion"
        }
    });
    geo.save(function(err){
        mongoose.disconnect();  // ???????????????????? ???? ???????? ????????????

        if(err) return console.log(err);
        console.log("???????????????? ????????????", geo);
    });
}

function addProjectData() {
    const proj = new project({
        geoID: 1,
        title: {
            ru: "????????????",
            en: "Ecologist"
        },
        month: 1
    });
    proj.save(function(err){
        mongoose.disconnect();  // ???????????????????? ???? ???????? ????????????

        if(err) return console.log(err);
        console.log("???????????????? ????????????", proj);
    });
}

function addEventsData() {
    const eventOne = new event({
        geoID: 1,
        date: new Date('2022-01-10'),
        month: 1,
        time: '14:00',
        title: {
            ru: '???????????? ??????????????',
            en: 'ecologist report'
        },
        speaker: {
            ru: '???????????????? ????????????????',
            en: 'Abramova Veronika'
        }
    });
    eventOne.save(function(err){
        mongoose.disconnect();  // ???????????????????? ???? ???????? ????????????
        if(err) return console.log(err);
        console.log("???????????????? ????????????", eventOne);
    });
    const eventTwo = new event({
        geoID: 1,
        date: new Date('2022-01-14'),
        month: 1,
        time: '19:00',
        title: {
            ru: '?????????????? ???? ????????????',
            en: 'meeting on the shore'
        }
    });
    eventTwo.save(function(err){
        mongoose.disconnect();  // ???????????????????? ???? ???????? ????????????
        if(err) return console.log(err);
        console.log("???????????????? ????????????", eventOne);
    });
}

// addProjectData()
// addEventsData()