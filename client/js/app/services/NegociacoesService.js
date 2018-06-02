class NegociacoesService {

    constructor() {
        this._urlSemana = 'negociacoes/semana';
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

}