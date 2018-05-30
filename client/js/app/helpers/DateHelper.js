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

    static stringToDate(text) {
        if (!/\d{4}-\d{2}-\d{2}/.test(text))
            throw new Error("Formato de data deve ser yyyy-mm-dd");
        else {
            return new Date(...text.split('-').map((field, index) => field - index % 2));
        }
    }
}