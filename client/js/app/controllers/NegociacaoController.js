class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            'adiciona', 'limpa');
            
        this._message = new Bind(
            new Message(),
            new MessageView($('#messageView')),
            'text');

        this._negociacoesService = new NegociacoesService();
    }

    adiciona(event) {
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._message.text = 'Negociacao cadastrada com exito';
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
    }

    importaNegociacoes() {
        console.log('importando negociações');
        
        Promise.all([
            this._negociacoesService.obterNegociacoesDaSemana(),
            this._negociacoesService.obterNegociacoesDaSemanaPassada(),
            this._negociacoesService.obterNegociacoesDaSemanaRetrasada()
        ])
        .then(response => {
            response
                .reduce((negociacoes, item) => negociacoes.concat(item),[])
                .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._message.text = 'Negociações importadas com sucesso.';
        })
        .catch(error => this._message.text = error);
    }

}