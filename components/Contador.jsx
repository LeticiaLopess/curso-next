import { Component } from "react";

export default class Contador extends Component {
    state = {
        numero: this.props.valorInicial ?? 0, // começara com o valor inicial, caso não seja passado (??) será 0
        passo: this.props.passo ?? 1
    }


    /* 
    <h2> {thus.state.numero} </h2> acessando o state, estado interno
    */

    inc = () => { // incremento. arrow function para evitar erro com o setState
        this.setState({ // passa o que quer modificar
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    alterarPasso = (ev) => {
        this.setState({ passo: +ev.target.value })
    }

    renderForm() {
        return (
            <>
                <input type="number" min={1} max={1000}
                    value={this.state.passo}
                    onChange={this.alterarPasso} />
                <button onClick={this.dec}>-</button>
                <button onClick={this.inc}>+</button>
            </>
        )
    }

    render() {
        return (
            <div>
                <h1>Contador (usando Classe)</h1>
                <h2>{this.state.numero}</h2>
                {this.renderForm()}
            </div>
        )
    }
}

// export default Contador