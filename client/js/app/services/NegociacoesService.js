class NegociacoesService {

    constructor() {
        this._urlSemana = 'negociacoes/semana';
        this._urlSemanaPassada = 'negociacoes/anterior'
        this._urlSemanaRetrasada = 'negociacoes/retrasada';
        this._urlCadastrarNova = 'negociacoes';
    }

    _obterNegociacoes(url, callback) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4) {
                let errorMessage = '';
                let negociacoes = [];
                
                if(xhr.status == 200) {
                    console.log("Obtendo negociações...");
                    negociacoes = JSON.parse(xhr.responseText)
                        .map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor));
                } else {
                    errorMessage = "Não foi possível acessar a API";
                    console.log(errorMessage);
                    console.log(xhr.responseText);
                }

                callback(errorMessage, negociacoes);
            }
        };

        xhr.send();
    }

    obterNegociacoes(semana, callback) {
        if(semana == 'atual')
            return this._obterNegociacoesDaSemana(callback);
        else if(semana == 'passada')
            return this._obterNegociacoesDaSemanaPassada(callback);
        else if(semana == 'retrasada')
            return this._obterNegociacoesDaSemanaRetrasada(callback);
    }

    _obterNegociacoesDaSemana(callback) {
        return this._obterNegociacoes(this._urlSemana, callback);
    }

    _obterNegociacoesDaSemanaPassada(callback) {
        return this._obterNegociacoes(this._urlSemanaPassada, callback);
    }

    _obterNegociacoesDaSemanaRetrasada(callback) {
        return this._obterNegociacoes(this._urlSemanaRetrasada, callback);
    }

    cadastrarNovaNegociacao(negociacao, callback) {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', this._urlCadastrarNova);
        xhr.setRequestHeader('content-type', 'application/json');
        
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4) {
                let errorMessage = '';
                let negociacaoCadastrada = null;
                
                if(xhr.status == 200) {
                    negociacaoCadastrada = negociacao;
                } else {
                    errorMessage = "Não foi possível acessar a API";
                    console.log(errorMessage);
                    console.log(xhr.responseText);
                }

                callback(errorMessage, negociacaoCadastrada);
            }
        };

        let negociacaoAsString = `{"data":"${negociacao.data}",
                                "quantidade":${negociacao.quantidade},
                                "valor":${negociacao.valor}}`;

        xhr.send(negociacaoAsString);
    }

}