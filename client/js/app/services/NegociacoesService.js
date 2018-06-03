class NegociacoesService {

    constructor() {
        this._urlSemana = 'negociacoes/semana';
        this._urlSemanaPassada = 'negociacoes/anterior'
        this._urlSemanaRetrasada = 'negociacoes/retrasada';
        this._urlCadastrarNova = 'negociacoes';
    }

    obterNegociacoesDaSemana() {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', this._urlSemana);

            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4) {
                    if(xhr.status == 200) {
                        console.log("Obtendo negociações...");
                        resolve(JSON.parse(xhr.responseText)
                        .map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)));
                    } else {
                        errorMessage = "Não foi possível obter negociações da semana";
                        console.log(errorMessage);
                        console.log(xhr.responseText);
                        reject(errorMessage);
                    }
                }
            };

            xhr.send();
        });
    }

    obterNegociacoesDaSemanaPassada() {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', this._urlSemanaPassada);

            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4) {
                    if(xhr.status == 200) {
                        console.log("Obtendo negociações...");
                        resolve(JSON.parse(xhr.responseText)
                        .map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)));
                    } else {
                        errorMessage = "Não foi possível obter negociações da semana passada";
                        console.log(errorMessage);
                        console.log(xhr.responseText);
                        reject(errorMessage);
                    }
                }
            };

            xhr.send();
        });
    }

    obterNegociacoesDaSemanaRetrasada() {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', this._urlSemanaRetrasada);

            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4) {
                    if(xhr.status == 200) {
                        console.log("Obtendo negociações...");
                        resolve(JSON.parse(xhr.responseText)
                        .map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)));
                    } else {
                        errorMessage = "Não foi possível obter negociações da semana retrasada";
                        console.log(errorMessage);
                        console.log(xhr.responseText);
                        reject(errorMessage);
                    }
                }
            };

            xhr.send();
        });
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