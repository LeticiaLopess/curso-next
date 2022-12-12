import { useState } from "react"

export default function formulario() {
    const [valor, setValor] = useState("")

    function alterarInput() {
        setValor(valor + "!") // concatenação
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <span>{valor}</span>
            <input type="text" value={valor}
                onChange={e => setValor(e.target.value)} />
            <button onClick={alterarInput}>Alterar</button>
        </div>
    )
}

// componente controlado - formulários: vincula um input com um estado 

// componente não controlado - componente sem armazenamento, como por exemplo um input de texto solto

/* 
Se eu determinar um valor inicial no input de texto, eu não conseguirei mais escrever, o valor inicial estará dentro da caixa

use o undefined e não o null
*/

