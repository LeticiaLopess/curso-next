export default function Repeticao1() {
    const listaAprovados = [
        'João',
        'Maria',
        'Ana',
        'Bia',
        'Carlos',
        'Daniel',
        'Laura',

    ]

    function renderizarLista() {   
        return listaAprovados.map(function(nome, i) {
            return <li key={i}>{nome}</li>
        })
    }
    
    return (
        <ul>
            {renderizarLista()}
        </ul>
    )
}

// cada elemento de uma chave deve ter uma propriedade única

/* function renderizarLista() {
    const itens = []

    for (let i = 0; i < listaAprovados.length; i++) {
        itens.push (<li key={i}>{listaAprovados[i]}</li>)
    }

    return itens
} */

// a função map serve para transformar um elemento em outro (nesse caso, de string [nomes] para li)