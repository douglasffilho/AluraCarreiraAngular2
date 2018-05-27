class Negociacao {
    
    constructor(data, quantidade, valor) {
        if(data === undefined)
            this._data = new Date();
        else
            this._data = new Date(data.getTime());;

        if(quantidade === undefined)
            this._quantidade = 1;
        else
            this._quantidade = quantidade;

        if(valor === undefined)
            this._valor = 0.0;
        else
            this._valor = valor;

        Object.freeze(this);
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }
}