class CadastraNegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
            
        this._message = new Bind(
            new Message(),
            new MessageView($('#messageView')),
            'text');

        this._negociacoesService = new NegociacoesService();
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

    cadastraNegociacao(event) {
        event.preventDefault();
        
        let negociacao = this._criaNegociacao();
        this._negociacoesService.cadastrarNovaNegociacao(negociacao, (error, negociacaoCadastrada) => {
            if(error) {
                this._message.text = error;
                return;
            }
            this._message.text = 'Negociação cadastrada com sucesso';
        });
    }

}