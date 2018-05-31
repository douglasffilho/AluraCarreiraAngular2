class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._message = new Message();
        this._messageView = new MessageView($('#messageView'));
        this._listaNegociacoes = new ListaNegociacoes(model => 
            this._negociacoesView.update(model));

        this._negociacoesView.update(this._listaNegociacoes);
    }

    adiciona(event) {
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._message.text = 'Negociacao adicionada com exito';
        this._messageView.update(this._message);
        this._limpaFormulario();
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.stringToDate(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }

    limpaNegociacoes() {
        this._listaNegociacoes.limpa();
        this._message.text = 'Negociações apagadas com exito';
        this._messageView.update(this._message);
    }

}