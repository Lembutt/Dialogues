class Server {
    host = '127.0.0.1';
    port = 3000;
    requestURI = `http://${this.host}:${this.port}`;

    test () {
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", `${this.requestURI}/test`, true );
        xmlHttp.send( "?a=123" );
        setTimeout(() => {
            if (xmlHttp.readyState === 4) {
                console.log(xmlHttp.status);
            }
        }, 350);

    }

    getGeo (geoID) {
        try {
            let xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", `${this.requestURI}/getGeo?geoID=${geoID}`, false );
            xmlHttp.send( null );
            return JSON.parse(xmlHttp.responseText);
        } catch (err) {
            console.log(err)
            return {}
        }

    }

    getProject (month, geoID) {
        try {
            let xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", `${this.requestURI}/getProject?geoID=${geoID}&month=${month}`, false );
            xmlHttp.send( null );
            return JSON.parse(xmlHttp.responseText) ;
        } catch (err) {
            console.log(err)
            return {}
        }
    }

    getEvents (month, geoID) {
        try {
            let xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", `${this.requestURI}/getEvents?geoID=${geoID}&month=${month}`, false );
            xmlHttp.send( null );
            return JSON.parse(xmlHttp.responseText) ;
        } catch (err) {
            console.log(err)
            return {}
        }
    }
}
const server = new Server()

function div(val, by){
    return (val - val % by) / by;
}

// pythonic range
function range(start, end, step) {
    let range = [];
    let typeofStart = typeof start;
    let typeofEnd = typeof end;

    if (step === 0) {
        throw TypeError("Step cannot be zero.");
    }

    if (typeofStart === "undefined" || typeofEnd === "undefined") {
        throw TypeError("Must pass start and end arguments.");
    } else if (typeofStart !== typeofEnd) {
        throw TypeError("Start and end arguments must be of same type.");
    }

    typeof step == "undefined" && (step = 1);

    if (end < start) {
        step = -step;
    }

    if (typeofStart === "number") {

        while (step > 0 ? end >= start : end <= start) {
            range.push(start);
            start += step;
        }

    } else if (typeofStart === "string") {

        if (start.length !== 1 || end.length !== 1) {
            throw TypeError("Only strings with one character are supported.");
        }

        start = start.charCodeAt(0);
        end = end.charCodeAt(0);

        while (step > 0 ? end >= start : end <= start) {
            range.push(String.fromCharCode(start));
            start += step;
        }

    } else {
        throw TypeError("Only string and number types are supported");
    }

    return range;

}


class GeoButtons {
    // цвета для кнопок в верхнем меню
    buttonsColors = {
        darkGreen: '#339191',
        purple: '#9888b7',
        pink: '#e288c2',
        yellow: '#e5d87c',
        green: '#93d197',
        skyBlue: '#90c9e0',
        blue: '#77ace0',
        peach: '#e29a9a'
    }

    constructor() {
        this.set_colors()
    }

    set_colors(){
        for (const button of Object.keys(this.buttonsColors)) {
            let element = document.getElementById(button)
            element.style.backgroundColor = this.buttonsColors[button]
        }
    }
}


class i18n {
    langsAvailable = ['ru', 'en'];
    translations = {
        "lang-project": {
            "ru": "проект",
            "en": "project"
        },
        "lang-events": {
            "ru": "события",
            "en": "participate"
        },
        "lang-application": {
            "ru": "заявка",
            "en": "apply"
        },
        "lang-archive": {
            "ru": "архив геолокаций",
            "en": "geo archive"
        },
        "lang-apply-geo": {
            "ru": "подайте заявку",
            "en": "apply now"
        },
        "lang-alluvion": {
            "ru": "намыв",
            "en": "alluvion"
        },
        "lang-about-title-name": {
            "ru": "Мобильная терасса &mdash;",
            "en": "mobile terrace &mdash;"
        },
        "lang-about-title-description": {
            "ru": "место для диалога и развития",
            "en": "a place for dialogue and progress"
        },
        "lang-about-text": {
            "ru": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolores dolorum tempore veritatis? Adipisci earum ex libero nam optio quia? Accusantium, commodi corporis eum eveniet iste perspiciatis praesentium recusandae vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolores dolorum tempore veritatis? Adipisci earum ex libero nam optio quia? Accusantium, commodi corporis eum eveniet iste perspiciatis praesentium recusandae vitae!",
            "en": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolores dolorum tempore veritatis? Adipisci earum ex libero nam optio quia? Accusantium, commodi corporis eum eveniet iste perspiciatis praesentium recusandae vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolores dolorum tempore veritatis? Adipisci earum ex libero nam optio quia? Accusantium, commodi corporis eum eveniet iste perspiciatis praesentium recusandae vitae!"
        },
        "lang-about-project-page-title":{
            "ru": "о проекте",
            "en": "about project"
        },
        "lang-about-first-para-text":{
            "ru": "На насыпной набережной мы предлагаем создать место для диалога &mdash; временную терассу, в которой будут презентоваться различные идеи и макеты по освоению этой части прибрежного пространства. Население, администрация, ученые, деятели культу смогут представить на всеобщее обозрение свои инновационные идеи.",
            "en": "On the embankment, we propose to create a place for dialogue &mdash; a temporary terrace, in which various ideas and layouts for the development of this part of the coastal space will be presented. Population, administration, scientists, cult figures will be able to present their innovative ideas to the public."
        },
        "lang-about-second-para-title": {
            "ru": "универсальный мобильный проект<br>",
            "en": "versatile mobile project<br>"
        },
        "lang-about-second-para-text": {
            "ru": "Временная веранда, возникающая на месте вокруг которого ведется полемика с целью рассмаотреть все возможные варианты развития территории с различных точек зрения.",
            "en": "A temporary veranda that appears on the spot around which controversy is being conducted in order to consider all possible options for the development of the territory from different points of view. "
        },
        "lang-schedule-page-title": {
            "ru": "события",
            "en": "events"
        },
        "lang-events-geo-hint": {
            "ru": "геолокация",
            "en": "geolocation"
        },
        "lang-events-time-hint": {
            "ru": "время",
            "en": "time"
        },
        "events-project-hint": {
            "ru": "проект",
            "en": "project"
        },
        "events-events-hint": {
            "ru": "события",
            "en": "events"
        }
    };
    userLang;

    choose_translation () {
        let userLang = navigator.language;
        this.userLang = userLang.split('-')[0];
        if (!(userLang in ['ru', 'en'])) {
            this.userLang = 'en';
        }
    }

    translate(lang=this.userLang, changedByButton=false) {
        this.userLang=lang;
        // меняем язык в интерфейсе
        for (const langAvailable of this.langsAvailable) {
            if (langAvailable === lang) {
                let element = document.getElementById(lang + 'Button');
                element.classList.add("my-lang-button-active");
            } else {
                let element = document.getElementById(langAvailable + 'Button');
                element.classList.remove("my-lang-button-active");
            }
        }

        // переводим
        let elemNamesToTranslate = Object.keys(this.translations);
        for (const elemName of elemNamesToTranslate) {
            let elements = document.getElementsByClassName(elemName);
            for (const element of elements) {
                element.innerHTML = this.translations[elemName][lang];
            }
        }

        // если язык изменяется при помощи кнопок
        if (changedByButton) {
            monthScroll.create(this.userLang, monthScroll.currentActiveMonth)
            projEvents.render(1, this.userLang)
        }
    }
}

let trans = new i18n();

class Arrows {

    arrowPicture = {
        "grey": "images/arrow-grey.svg",
        "blue": "images/arrow-blue.svg"
    }

    arrowClasses = {
        "my-arrows-grey": "grey",
        "my-arrows-blue": "blue"
    }

    draw() {
        for (const cl of Object.keys(this.arrowClasses)) {
            let element = document.getElementsByClassName(cl)[0];
            element.innerHTML = ''
            let newDiv = document.createElement('div');
            let newImg = document.createElement('img');
            newImg.src = this.arrowPicture[this.arrowClasses[cl]];
            newImg.alt = 'arrow';
            newDiv.appendChild(newImg);
            for (const x of range(0, div(element.clientWidth, 14))) {
                let divToAppend = newDiv.cloneNode(true)
                element.appendChild(divToAppend)
            }
        }

    }
}

class MonthScroll {
    months = [
        {
            "ru": null,
            "en": null,
            "num": 0
        },
        {
            "ru": "Январь",
            "en": "January",
            "num": 1
        },
        {
            "ru": "Февраль",
            "en": "February",
            "num": 2
        },
        {
            "ru": "Март",
            "en": "March",
            "num": 3
        },
        {
            "ru": "Апрель",
            "en": "April",
            "num": 4
        },
        {
            "ru": "Май",
            "en": "May",
            "num": 5
        },
        {
            "ru": "Июнь",
            "en": "June",
            "num": 6
        },
        {
            "ru": "Июль",
            "en": "July",
            "num": 7
        },
        {
            "ru": "Август",
            "en": "August",
            "num": 8
        },
        {
            "ru": "Сентябрь",
            "en": "September",
            "num": 9
        },
        {
            "ru": "Октябрь",
            "en": "October",
            "num": 10
        },
        {
            "ru": "Ноябрь",
            "en": "November",
            "num": 11
        },
        {
            "ru": "Декабрь",
            "en": "December",
            "num": 12
        }
    ];
    currentActiveMonth = this.__getCurrentMonth();

    __getCurrentMonth() {
        let date = new Date();
        return date.getMonth() + 1;
    }

    create(lang, initMonth=this.currentActiveMonth, changedByButton=false) {
        this.currentActiveMonth = initMonth;
        let scrollArray = [
            this.months[(initMonth - 1)  >= 1 ? (initMonth - 1) : 12],
            this.months[initMonth],
            this.months[(initMonth + 1)  <= 12 ? (initMonth + 1) : (initMonth + 1) % 12],
            this.months[(initMonth + 2)  <= 12 ? (initMonth + 2) : (initMonth + 2) % 12],
        ];

        let elements = document.getElementsByClassName('month-scroll');

        for (const i of range(0, elements.length - 1)) {
            elements[i].innerHTML = scrollArray[i][lang];
            elements[i].setAttribute(
                'onclick',
                `monthScroll.create(trans.userLang, ${scrollArray[i].num}, true)`
            );
        }

        if (changedByButton) {
            projEvents.render()
        }
    }
}

let monthScroll = new MonthScroll();


class ProjectEventsList {

    renderGeolocationTitle (geoID = 1, lang=trans.userLang) {
        const geo = server.getGeo(1);
        let element = document.getElementsByClassName('events-geo-name')[0];
        element.innerHTML = 'title' in geo ? geo.title[lang] : '';
    };

    renderProjectDescription (geoID = 1, month = monthScroll.currentActiveMonth, lang=trans.userLang) {
        const proj = server.getProject(month, geoID);
        let elementTitle = document.getElementsByClassName('events-project-title')[0];
        let elementDescription = document.getElementsByClassName('events-project-description')[0];
        elementTitle.innerHTML = 'title' in proj ? proj.title[lang] : '';
        elementDescription.innerHTML = 'description' in proj ? proj.description[lang] : '';

    }

    renderProjectEvents (geoID = 1, month = monthScroll.currentActiveMonth, lang=trans.userLang) {
        const events = server.getEvents(month, geoID);
        let mainElement = document.getElementsByClassName('events-events-text')[0]
        for (const event of events) {
            let eventTitleElement = document.createElement('div')
            eventTitleElement.classList.add('col-12')

        }
    }

    render (geoID=1, lang=trans.userLang, month=monthScroll.currentActiveMonth) {
        this.renderGeolocationTitle(geoID, lang)
        this.renderProjectDescription(geoID, month, lang)
    }
}


let arrows = new Arrows();
let projEvents = new ProjectEventsList()

//events

window.addEventListener('resize', function(event) {
    arrows.draw()
}, true);
