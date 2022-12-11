function acao1() {
    console.log("acao1")
}

export default function botao() {
    function acao2() {
        console.log("acao2")
    }

    function acao5(e) { // e = evento
        console.log(e)
    }

    return (
        <div>
            <button onClick={acao1}>Click #01</button>
            <button onClick={acao2}>Click #02</button>
            <button onClick={function () { // função dentro do onClick
                console.log("acao3")
            }}>Click #03</button>
            <button onClick={() => console.log("acao4")}> 
                Click #04 
            </button>
            <button onClick={acao5}>
                Click #05 
            </button>
            <button onClick={e => acao5(e.altKey)}>
                Click #05 v2
            </button>
            <div>
                <input type="text" onChange={e => console.log(e.target.value)} />
            </div>
        </div>
    )
}

// como chamar uma função a partir do react

// no primeiro button - sempre que o evento onClick acontecer, a função acao1 será chamada

// no click #04 - função arrow (+ comum)

// no click #05 - aparecerá o evento que foi gerado na function acao5

// no click #05 v2 - se eu clicar no botão, retornará falso pois a propriedade que eu atribui para ser verdadeira foi o altKey (se eu segurar alt e clicar no botão, retornará true)

// onChange [...] e.change - mostra a quantidade de mudanças

// onChange [...] e.target.value - mostra os valores mudados sequencialmente