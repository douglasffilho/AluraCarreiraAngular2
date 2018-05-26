class Negociacao {
    
    constructor(data, quantidade, valor) {
        if(data === undefined)
            this._data = new Date();
        else
            this._data = data;

        if(quantidade === undefined)
            this._quantidade = 1;
        else
            this._quantidade = quantidade;

        if(valor === undefined)
            this._valor = 0.0;
        else
            this._valor = valor;
    }

    get data() {
        return this._data;
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