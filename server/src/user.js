class User {
    lang = null;
    langsAvailable = ['ru', 'en'];

    setLang (langHeader) {
        this.lang = langHeader[0]+langHeader[1];
        if (!(this.lang in this.langsAvailable)) {
            this.lang = 'en';
        }
        return this.lang;
    };
}

module.exports = User