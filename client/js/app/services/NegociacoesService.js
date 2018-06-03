class NegociacoesService {

    constructor() {
        this._urlSemana = 'negociacoes/semana';
        this._urlCadastrarNova = 'negociacoes';
    }

    obterNegociacoesDaSemana(callback) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', this._urlSemana);

        
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

    cadastrarNovaNegociacao(negociacao, callback) {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', this._urlCadastrarNova);
        xhr.setRequestHeader('content-type', 'application/json');
        
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4) {
                let errorMessage = '';
                let negociacaoCadastrada = null;
                
                if(xhr.status == 200) {
                    console.log(responseText);
                    // negociacaoCadastrada = JSON.parse(xhr.responseText);
                } else {
                    errorMessage = "Não foi possível acessar a API";
                    console.log(errorMessage);
                    console.log(xhr.responseText);
                }

                callback(errorMessage, negociacaoCadastrada);
            }
        };

        let negociacaoAsString = JSON.stringify(negociacao);

        xhr.send(negociacaoAsString);
    }

}