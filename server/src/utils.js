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

module.exports = Date