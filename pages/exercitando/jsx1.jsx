// import React from 'react' -> não é necessário mais importar dessa forma a partir da versão 17 do React

export default function jsx1Diferente () {
    return (
        <div>
           <h1>JSX #01</h1> 
        </div>
    )
}

/* JSX - sintaxe que você mistura código "html" dentro de um arquivo javascript 
converte para js puro para que o browse interprete e gere dinamicamente a tag h1 
o React manipula a DOM internamente para criar esses elementos dinamicamente */
