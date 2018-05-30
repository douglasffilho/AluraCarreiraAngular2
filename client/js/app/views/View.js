class View {
    constructor(domElement) {
        this._domElement = domElement;
    }

    template(model) {
        throw new Error('template() method must be implemented!');
    }

    update(model) {
        this._domElement.innerHTML = this.template(model);
    }

}