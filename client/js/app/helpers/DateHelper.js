class DateHelper {

    constructor() {
        throw new Error("DateHelper can't be instantiated");
    }

    static dateToString(date) {
        let dd = date.getDate();
        let mm = date.getMonth() + 1;
        let yyyy = date.getFullYear();

        return `${dd}/${mm}/${yyyy}`;
    }
}