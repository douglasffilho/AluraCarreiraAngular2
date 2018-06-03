class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    limpa() {
        this._negociacoes = [];
    }

    get volume() {
        return this._negociacoes.reduce((total, negociacao) => total + negociacao.valor, 0.0);
    }
}