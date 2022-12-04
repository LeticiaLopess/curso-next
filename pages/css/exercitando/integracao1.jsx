export default function integracao () {
    return (
        <div className="integracao1">
            <div className="vermelha">Texto #01</div>
            <div className="azul">Texto #02</div>
            <div className="branca">Texto #03</div>
        </div>
    )
}

// devemos importar o arquivo css em _app.js, se não, dará erro

/*

o Next faz o máximo possível para que usemos um CSS que tem um escopo daquele componente que está sendo usado, por isso que, se eu importar o CSS dentro do componente teremos problema, por conta de tal restrição.
Podemos resolver isso definindo os elementos por classe e definindo-os personalizadamente no documento CSS.

*/