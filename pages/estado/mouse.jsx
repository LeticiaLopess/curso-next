import { useState } from "react"

export default function mouse () {
    const [x, asetX] = useState(0) // escrito em uma linha

    const arrayY = useState(0)     // escrito em mais linhas
    let y = arrayY[0]
    const alterarY = arrayY[1]


   
    const estilo = { 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#222", 
        color: "#fff",
        height: "100vh"
        
    }

    function quandoMover(ev) {
        setX(ev.clientX)
        alterarY(ev.clientY)
    }

    return (
        <div style={estilo} onMouseMove={quandoMover}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
    }


// clientX e clientY - propriedades que aparecem no console no inspecionar

// não posso alterar o valor direto mesmo que eu esteja mexendo no x e no y que foi gerado pelo useState. Por isso não posso fazer assim:
/* function quandoMover(ev) {
    x = ev.clientX
    y = ev.clientY
    console.log('valor alterado')
}

tenho que usar as funções alterarX e alterarY

const arrayY = useState(0)
    let y = arrayY[0]
    const alterarY = arrayY[1]

    TRANFORMANDO EM UMA ÚNICA LINHA:

const [y, alterarY] = useState(0)
*/