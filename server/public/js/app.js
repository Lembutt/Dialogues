const arrowPicture = {
    grey: "images/arrow-grey.svg",
    blue: "images/arrow-blue.svg",
    green: "images/arrow-green.svg"
}

const arrowClasses = {
    "my-arrows-grey": "grey",
    "my-arrows-blue": "blue",
    "my-arrows-green": "green"
}

function div(val, by){
    return (val - val % by) / by;
}
function range(start, end, step) {
    // pythonic range

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
function RemoveLastDirectoryPartOf(the_url) {
    let the_arr = the_url.split('/');
    the_arr.pop();
    return( the_arr.join('/') );
}
function translate(lang) {
    window.location = RemoveLastDirectoryPartOf(window.location + '') + '/?lang=' + lang;
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



class Arrows {

    draw() {
        for (const cl of Object.keys(arrowClasses)) {
            let element = document.getElementsByClassName(cl)[0];
            element.innerHTML = ''
            let newDiv = document.createElement('div');
            let newImg = document.createElement('img');
            newImg.src = arrowPicture[arrowClasses[cl]];
            newImg.alt = 'arrow';
            newDiv.appendChild(newImg);
            for (const x of range(0, div(element.clientWidth, 14))) {
                let divToAppend = newDiv.cloneNode(true)
                element.appendChild(divToAppend)
            }
        }

    }
}

let arrows = new Arrows();

function onload () {
    arrows.draw();
}
//js events

window.addEventListener('resize', arrows.draw, true);
