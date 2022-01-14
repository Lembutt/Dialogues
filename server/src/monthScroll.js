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
    __getCurrentMonth() {
        let date = new Date();
        return date.getMonth() + 1;
    };

    create(lang, initMonth) {
        initMonth = parseInt(initMonth)
        const first = this.months[(initMonth - 1) >= 1 ? (initMonth - 1) : 12];
        const second = this.months[initMonth];
        const third = this.months[(initMonth + 1) <= 12 ? (initMonth + 1) : (initMonth + 1) % 12];
        const fourth = this.months[(initMonth + 2) <= 12 ? (initMonth + 2) : (initMonth + 2) % 12];

        return {
            first: {
                name: first[lang],
                link: `/${lang}?month=${first.num}#events`,
            },
            second: {
                name: second[lang],
                link: `/${lang}?month=${second.num}#events`
            },
            third: {
                name: third[lang],
                link: `/${lang}?month=${third.num}#events`
            },
            fourth: {
                name: fourth[lang],
                link: `/${lang}?month=${fourth.num}#events`,
            }
        };
    };
}

module.exports = MonthScroll