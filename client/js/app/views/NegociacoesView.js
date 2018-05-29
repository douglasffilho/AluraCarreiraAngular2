class NegociacoesView {

    constructor(domElement) {
        this._domElement = domElement;    
    }

    _template() {
        return `<table class="table table-hover table-bordered">
                        <thead>
                        <tr>
                            <th>DATA</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                            <th>VOLUME</th>
                        </tr>
                    </thead>
            
                    <tbody>
                    </tbody>
            
                    <tfoot>
                    </tfoot>
                </table>`;
    }

    update(listaNegociacoes) {
        this._domElement.innerHTML = this._template();
    }
}