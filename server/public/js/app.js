// class Server {
//     host = '194.32.248.49';
//     port = 3000;
//     requestURI = `https://${this.host}`;
//
//     getGeo (geoID) {
//         try {
//             let xmlHttp = new XMLHttpRequest();
//             xmlHttp.open( "GET", `${this.requestURI}/getGeo?geoID=${geoID}`, false );
//             xmlHttp.send( null );
//             return JSON.parse(xmlHttp.responseText);
//         } catch (err) {
//             console.log(err)
//             return {}
//         }
//     };
//
//     getProject (month, geoID) {
//         try {
//             let xmlHttp = new XMLHttpRequest();
//             xmlHttp.open( "GET", `${this.requestURI}/getProject?geoID=${geoID}&month=${month}`, false );
//             xmlHttp.send( null );
//             return JSON.parse(xmlHttp.responseText) ;
//         } catch (err) {
//             console.log(err)
//             return {}
//         }
//     };
//
//     getEvents (month, geoID) {
//         try {
//             let xmlHttp = new XMLHttpRequest();
//             xmlHttp.open( "GET", `${this.requestURI}/getEvents?geoID=${geoID}&month=${month}`, false );
//             xmlHttp.send( null );
//             return JSON.parse(xmlHttp.responseText) ;
//         } catch (err) {
//             console.log(err)
//             return {}
//         }
//     };
//
//     postEventApplication (data) {
//         try {
//             let xmlHttp = new XMLHttpRequest();
//             xmlHttp.open( "POST", `${this.requestURI}/postEventApplication?`, false );
//             xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//             xmlHttp.send(
//                 JSON.parse(
//                     JSON.stringify(
//                         data
//                     )
//             ));
//             return JSON.parse(xmlHttp.responseText) ;
//         } catch (err) {
//             console.log(err)
//             return {}
//         }
//     };
// }
// const server = new Server()

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

// ddmmyy format of date
Date.prototype.ddmmyy = function () {
    let mm = this.getMonth() + 1; // getMonth() is zero-based
    let dd = this.getDate();
    let yyyy = this.getFullYear().toString();

    return [
        (dd>9 ? '' : '0') + dd,
        (mm>9 ? '' : '0') + mm,
        yyyy[2] + yyyy[3]
    ].join('.');
}

function RemoveLastDirectoryPartOf(the_url)
{
    let the_arr = the_url.split('/');
    the_arr.pop();
    return( the_arr.join('/') );
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

function translate(lang) {
    let newLocation = RemoveLastDirectoryPartOf(window.location + '') + '/?lang=' + lang;
    window.location.replace(newLocation)
}

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
            ru: null,
            en: null,
            num: 0
        },
        {
            ru: "Январь",
            en: "January",
            num: 1
        },
        {
            ru: "Февраль",
            en: "February",
            num: 2
        },
        {
            ru: "Март",
            en: "March",
            num: 3
        },
        {
            ru: "Апрель",
            en: "April",
            num: 4
        },
        {
            ru: "Май",
            en: "May",
            num: 5
        },
        {
            ru: "Июнь",
            en: "June",
            num: 6
        },
        {
            ru: "Июль",
            en: "July",
            num: 7
        },
        {
            ru: "Август",
            en: "August",
            num: 8
        },
        {
            ru: "Сентябрь",
            en: "September",
            num: 9
        },
        {
            ru: "Октябрь",
            en: "October",
            num: 10
        },
        {
            ru: "Ноябрь",
            en: "November",
            num: 11
        },
        {
            ru: "Декабрь",
            en: "December",
            num: 12
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


// class ProjectEventsList {
//
//     renderGeolocationTitle (geoID = 1, lang=trans.userLang) {
//         const geo = server.getGeo(1);
//         let element = document.getElementsByClassName('events-geo-name')[0];
//         element.innerHTML = 'title' in geo ? geo.title[lang] : '';
//     };
//
//     renderProjectDescription (geoID = 1, month = monthScroll.currentActiveMonth, lang=trans.userLang) {
//         const proj = server.getProject(month, geoID);
//         let elementTitle = document.getElementsByClassName('events-project-title')[0];
//         let elementDescription = document.getElementsByClassName('events-project-description')[0];
//         elementTitle.innerHTML = 'title' in proj ? proj.title[lang] : '';
//         elementDescription.innerHTML = 'description' in proj ? proj.description[lang] : '';
//
//     }
//
//     renderProjectEvents (geoID = 1, month = monthScroll.currentActiveMonth, lang=trans.userLang) {
//         const delimiter = '| '
//         const events = server.getEvents(month, geoID);
//         // главный элемент
//         let mainElement = document.getElementsByClassName('events-events-text')[0];
//         mainElement.innerHTML = ''
//         for (const event of events) {
//             // есть ли у события спикер
//             const eventHasSpeaker = !(event.speaker[lang] === ' ');
//
//             // для каждого события свой элемент
//             let eventElement = document.createElement('div');
//
//
//             // элемент для шапки события
//             let eventTitleElement = document.createElement('div');
//             eventTitleElement.classList.add('events-event-title');
//             eventTitleElement.classList.add('col-12');
//
//
//             // добавляем дату события
//             let spanTitleDate = document.createElement('span');
//             spanTitleDate.classList.add('events-event-title-date');
//             spanTitleDate.innerHTML = new Date(event.date).ddmmyy() + delimiter;
//             eventTitleElement.appendChild(spanTitleDate);
//
//             // добавляем название события
//             let spanTitleTitle = document.createElement('span');
//             spanTitleTitle.classList.add('text-uppercase');
//             spanTitleTitle.classList.add('events-event-title-title');
//             spanTitleTitle.innerHTML = event.title[lang] + (eventHasSpeaker ? delimiter : '');
//             eventTitleElement.appendChild(spanTitleTitle);
//
//             // добавляем спикеров события если есть
//             if (eventHasSpeaker) {
//                 let spanTitleSpeaker = document.createElement('span');
//                 spanTitleSpeaker.classList.add('events-event-title-speaker')
//                 spanTitleSpeaker.innerHTML = event.speaker[lang];
//                 eventTitleElement.appendChild(spanTitleSpeaker);
//             }
//
//
//             // элемент для описания событияa
//             let eventDescription = document.createElement('div')
//             eventDescription.classList.add('col-12')
//             eventDescription.classList.add('row')
//             eventDescription.classList.add('events-event-description')
//
//
//             //время начала мероприятия
//             let eventDescriptionTime = document.createElement('div')
//             eventDescriptionTime.classList.add('col-2')
//             eventDescriptionTime.classList.add('col-md-1')
//             eventDescriptionTime.classList.add('events-event-description-time')
//             eventDescriptionTime.classList.add('my-del-padding')
//             eventDescriptionTime.innerHTML = event.time
//             eventDescription.appendChild(eventDescriptionTime)
//
//             //описание события
//             let eventDescriptionText = document.createElement('div')
//             eventDescriptionText.classList.add('col-10')
//             eventDescriptionText.innerHTML = event.description[lang]
//             eventDescription.appendChild(eventDescriptionText)
//
//
//             let emptyRow = document.createElement('div')
//             emptyRow.classList.add('col-12')
//             emptyRow.classList.add('events-event-empty-row')
//
//
//
//             eventElement.appendChild(eventTitleElement)
//             eventElement.appendChild(eventDescription)
//             eventElement.appendChild(emptyRow)
//             mainElement.appendChild(eventElement)
//             // eventTitleElement.appendChild(document.createElement(span))
//         }
//     }
//
//     render (geoID=1, lang=trans.userLang, month=monthScroll.currentActiveMonth) {
//         this.renderGeolocationTitle(geoID, lang);
//         this.renderProjectDescription(geoID, month, lang);
//         this.renderProjectEvents(geoID, month, lang)
//     }
// }


// class Applications {
//     eventApplicationFormIDs = {
//         name: "inputEventsName",
//         profession: "inputEventsProfession",
//         country: "inputEventsCountry",
//         city: "inputEventsCity",
//         theme: "inputEventsTheme",
//         themeDescription: "inputEventsThemeDescription",
//         phone: "inputEventsPhone",
//         email: "inputEventsEmail",
//         otherContacts: "inputEventsOtherContacts"
//     };
//
//     makeEventApplication () {
//         let applicationData = {};
//         for (const form of Object.keys(this.eventApplicationFormIDs)) {
//             let element = document.getElementById(this.eventApplicationFormIDs[form]);
//             applicationData[form] = element.value;
//             element.value = '';
//         }
//         server.postEventApplication(applicationData);
//     }
// }

let arrows = new Arrows();
// let projEvents = new ProjectEventsList();
// let appl = new Applications();

function onload () {
    // trans.translate();
    // monthScroll.create(trans.userLang);
    // projEvents.render();
    arrows.draw();
}
//js events

window.addEventListener('resize', arrows.draw, true);
