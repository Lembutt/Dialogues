const {Schema, model} = require('mongoose')

const i18n = new Schema({
    ru: {
        type: String,
        required: true
    },
    en: {
        type: String,
        required: true
    }
})

const geolocation = new Schema({
    geoID: {
      type: Number,
      required: true
    },
    title: {
        type: i18n,
        required: true
    },
    description: {
        type: i18n,
        required: true,
        default: {
            ru: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, deleniti deserunt fuga ipsam " +
                "molestias nobis nostrum possimus qui quisquam repellat voluptas, voluptates? Dolorum fuga minima quod " +
                "saepe voluptas! Esse, recusandae.",
            en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, deleniti deserunt fuga ipsam " +
                "molestias nobis nostrum possimus qui quisquam repellat voluptas, voluptates? Dolorum fuga minima quod " +
                "saepe voluptas! Esse, recusandae."
        }
    }
})

const project = new Schema({
    geoID: {
        type: Number,
        default: 1
    },
    title: {
        type: i18n,
        required: true
    },
    description: {
        type: i18n,
        required: true,
        default: {
            ru: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, deleniti deserunt fuga ipsam " +
                "molestias nobis nostrum possimus qui quisquam repellat voluptas, voluptates? Dolorum fuga minima quod " +
                "saepe voluptas! Esse, recusandae.",
            en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, deleniti deserunt fuga ipsam " +
                "molestias nobis nostrum possimus qui quisquam repellat voluptas, voluptates? Dolorum fuga minima quod " +
                "saepe voluptas! Esse, recusandae."
        }
    },
    month: {
        type: Number,
        required: true
    }
})

const event = new Schema({
    geoID: {
        type: Number,
        default: 1
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    name: {
        type: i18n,
        required: true
    },
    speaker: {
        type: i18n,
        required: false,
        default: {
            ru: '',
            en: ''
        }
    },
    description: {
        type: i18n,
        required: true,
        default: {
            ru: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, deleniti deserunt fuga ipsam " +
                "molestias nobis nostrum possimus qui quisquam repellat voluptas, voluptates? Dolorum fuga minima quod " +
                "saepe voluptas! Esse, recusandae.",
            en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, deleniti deserunt fuga ipsam " +
                "molestias nobis nostrum possimus qui quisquam repellat voluptas, voluptates? Dolorum fuga minima quod " +
                "saepe voluptas! Esse, recusandae."
        }
    }
})

module.exports = {
    i18n: model('i18n', i18n),
    geolocation: model('geolocation', geolocation),
    project: model('project', project),
    event: model('event', event)
};