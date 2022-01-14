class i18n {
    translations = {
        project: {
            ru: "проект",
            en: "project"
        },
        events: {
            ru: "события",
            en: "participate"
        },
        application: {
            ru: "заявка",
            en: "apply"
        },
        problemReport: {
            ru: "Расскажите о проблеме",
            en: "Report problem"
        },
        archive: {
            ru: "архив геолокаций",
            en: "geo archive"
        },
        applyGeo: {
            ru: "подайте заявку",
            en: "apply now"
        },
        alluvion: {
            ru: "намыв",
            en: "alluvion"
        },
        aboutTitleName: {
            ru: "Мобильная терасса -",
            en: "mobile terrace -"
        },
        aboutTitleDescription: {
            ru: "место для диалога и развития",
            en: "a place for dialogue and progress"
        },
        aboutText: {
            ru: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolores dolorum tempore veritatis? Adipisci earum ex libero nam optio quia? Accusantium, commodi corporis eum eveniet iste perspiciatis praesentium recusandae vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolores dolorum tempore veritatis? Adipisci earum ex libero nam optio quia? Accusantium, commodi corporis eum eveniet iste perspiciatis praesentium recusandae vitae!",
            en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolores dolorum tempore veritatis? Adipisci earum ex libero nam optio quia? Accusantium, commodi corporis eum eveniet iste perspiciatis praesentium recusandae vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolores dolorum tempore veritatis? Adipisci earum ex libero nam optio quia? Accusantium, commodi corporis eum eveniet iste perspiciatis praesentium recusandae vitae!"
        },
        aboutProjectPageTitle: {
            ru: "о проекте",
            en: "about project"
        },
        aboutFirstParaText:{
            ru: "На насыпной набережной мы предлагаем создать место для диалога - временную терассу, в которой будут презентоваться различные идеи и макеты по освоению этой части прибрежного пространства. Население, администрация, ученые, деятели культу смогут представить на всеобщее обозрение свои инновационные идеи.",
            en: "On the embankment, we propose to create a place for dialogue - a temporary terrace, in which various ideas and layouts for the development of this part of the coastal space will be presented. Population, administration, scientists, cult figures will be able to present their innovative ideas to the public."
        },
        aboutSecondParaTitle: {
            ru: "универсальный мобильный проект",
            en: "versatile mobile project"
        },
        aboutSecondParaText: {
            ru: "Временная веранда, возникающая на месте вокруг которого ведется полемика с целью рассмаотреть все возможные варианты развития территории с различных точек зрения.",
            en: "A temporary veranda that appears on the spot around which controversy is being conducted in order to consider all possible options for the development of the territory from different points of view. "
        },
        schedulePageTitle: {
            ru: "события",
            en: "events"
        },
        eventsGeoHint: {
            ru: "геолокация",
            en: "geolocation"
        },
        eventsTimeHint: {
            ru: "время",
            en: "time"
        },
        eventsProjectHint: {
            ru: "проект",
            en: "project"
        },
        eventsEventsHint: {
            ru: "мероприятия",
            en: "events"
        },
        eventsCreateEventHint: {
            ru: "предложить мероприятие",
            en: "propose an event"
        },
        eventsCreateProjectHint: {
            ru: "предложить проект",
            en: "propose a project"
        },
        profession: {
            ru: "Профессия",
            en: "Profession"
        },
        name: {
            ru: "Имя",
            en: "Name"
        },
        theme: {
            ru: "Тема события",
            en: "Event theme"
        },
        themeDescription: {
            ru: "Описание события",
            en: "Event description"
        },
        city: {
            ru: "Город",
            en: "City"
        },
        country: {
            ru: "Страна",
            en: "Country"
        },
        phone: {
            ru: "Телефон",
            en: "Phone"
        },
        otherContacts: {
            ru: "Другие контакты",
            en: "Other contacts"
        },
        apply: {
            ru: "Подать заявку",
            en: "Apply"
        },
        title: {
            ru: "Диалоги",
            en: "Dialogues"
        },
        propose: {
            ru: "Предложить!",
            en: "Propose!"
        },
        proposeEventTitle: {
            ru: "Предложите мероприятие!",
            en: "Propose an event!"
        },
        proposeProjectTitle: {
            ru: "Предложите проект!",
            en: "Propose a project!"
        },
        projectTheme: {
            ru: "Тема проекта",
            en: "Project theme"
        },
        projectThemeDescription: {
            ru: "Описание темы проекта",
            en: "Project theme description"
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
