class i18n {
    translations = {
        "langproject": {
            ru: "проект",
            en: "project"
        },
        "langevents": {
            ru: "события",
            en: "participate"
        },
        "langapplication": {
            ru: "заявка",
            en: "apply"
        },
        "langarchive": {
            ru: "архив геолокаций",
            en: "geo archive"
        },
        "langapplygeo": {
            ru: "подайте заявку",
            en: "apply now"
        },
        "langalluvion": {
            ru: "намыв",
            en: "alluvion"
        },
        "langabouttitlename": {
            ru: "Мобильная терасса &mdash;",
            en: "mobile terrace &mdash;"
        },
        "langabouttitledescription": {
            ru: "место для диалога и развития",
            en: "a place for dialogue and progress"
        },
        "langabouttext": {
            ru: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolores dolorum tempore veritatis? Adipisci earum ex libero nam optio quia? Accusantium, commodi corporis eum eveniet iste perspiciatis praesentium recusandae vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolores dolorum tempore veritatis? Adipisci earum ex libero nam optio quia? Accusantium, commodi corporis eum eveniet iste perspiciatis praesentium recusandae vitae!",
            en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolores dolorum tempore veritatis? Adipisci earum ex libero nam optio quia? Accusantium, commodi corporis eum eveniet iste perspiciatis praesentium recusandae vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolores dolorum tempore veritatis? Adipisci earum ex libero nam optio quia? Accusantium, commodi corporis eum eveniet iste perspiciatis praesentium recusandae vitae!"
        },
        "langaboutprojectpagetitle":{
            ru: "о проекте",
            en: "about project"
        },
        "langaboutfirstparatext":{
            ru: "На насыпной набережной мы предлагаем создать место для диалога &mdash; временную терассу, в которой будут презентоваться различные идеи и макеты по освоению этой части прибрежного пространства. Население, администрация, ученые, деятели культу смогут представить на всеобщее обозрение свои инновационные идеи.",
            en: "On the embankment, we propose to create a place for dialogue &mdash; a temporary terrace, in which various ideas and layouts for the development of this part of the coastal space will be presented. Population, administration, scientists, cult figures will be able to present their innovative ideas to the public."
        },
        "langaboutsecondparatitle": {
            ru: "универсальный мобильный проект",
            en: "versatile mobile project"
        },
        "langaboutsecondparatext": {
            ru: "Временная веранда, возникающая на месте вокруг которого ведется полемика с целью рассмаотреть все возможные варианты развития территории с различных точек зрения.",
            en: "A temporary veranda that appears on the spot around which controversy is being conducted in order to consider all possible options for the development of the territory from different points of view. "
        },
        "langschedulepagetitle": {
            ru: "события",
            en: "events"
        },
        "langeventsgeohint": {
            ru: "геолокация",
            en: "geolocation"
        },
        "langeventstimehint": {
            ru: "время",
            en: "time"
        },
        "langeventsprojecthint": {
            ru: "проект",
            en: "project"
        },
        "langeventseventshint": {
            ru: "мероприятия",
            en: "events"
        },
        "langeventscreateeventhint": {
            ru: "предложить мероприятие",
            en: "propose an event"
        },
        "langprofession": {
            ru: "Профессия",
            en: "Profession"
        },
        "langname": {
            ru: "Ваше имя",
            en: "Your name"
        },
        "langtheme": {
            ru: "Тема события",
            en: "Event theme"
        },
        "langthemedescription": {
            ru: "Описание события",
            en: "Event description"
        },
        "langcity": {
            ru: "Город",
            en: "City"
        },
        "langcountry": {
            ru: "Страна",
            en: "Country"
        },
        "langphone": {
            ru: "Телефон",
            en: "Phone"
        },
        "langothercontacts": {
            ru: "Другие контакты",
            en: "Other contacts"
        },
        "langapply": {
            ru: "Подать заявку",
            en: "Apply"
        },
        "langtitle": {
            ru: "Диалоги",
            en: "Dialogues"
        }
    };

    translate (lang) {
        let translated = {};
        for (const translation in this.translations) {
            translated[translation] = this.translations[translation][lang];
        }
        return translated
    }
}

module.exports = i18n
