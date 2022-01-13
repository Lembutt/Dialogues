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

module.exports = {
    monthScroll: monthScroll
}