export default function Titulo(props) {

        return props.pequeno ? (
            <>
                <p>{props.principal}</p>   
                <p>{props.secundario}</p>
            </>
        ) : (
            <>
                <h1>{props.principal}</h1>   
                <h2>{props.secundario}</h2>
            </>
        )
}


/* UTILIZAMOS O OPERADOR TERNÁRIO AO INVÉS DO IF:

if (props.pequeno) {
    return (
        <>
        <p>{props.principal}</p>   
        <p>{props.secundario}</p>
        </>
    )
} else {
        <>
        <h1>{props.principal}</h1>   
        <h2>{props.secundario}</h2>
        </>
}

*/



// NÃO VAI GERAR URL POIS ESTÁ FORA DA PASTA "PAGES", ENTÃO PODEMOS USAR A PRIMEIRA LETRA DO NOME DO ARQUIVO SENDO MAIÚSCULA (faz diferença na url)



/* 
COMPONENTES FUNCIONAIS - baseados em funções

COMPONENTES BASEADOS EM CLASSE - com classes
*/

// em 99,9% das aplicações as pessoas chamam de "props" as propriedades que são atribuídas a um componente