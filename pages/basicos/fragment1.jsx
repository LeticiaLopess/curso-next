import React from 'react'
export default function fragment () {
    return (
        <React.Fragment>
        <h1>Título</h1>
        <h2>Subtítulo</h2>
        </React.Fragment>
    )
}

/* eu não posso retornar dois elementos adjacentes.

SOLUÇÕES:

1) Podemos colocar uma vírgula após o fechamento das tags (até a penúltima) para evitar tal erro;

2) Envolvemos as tags com uma div;

3) colocamos:
import React from 'react' 

e envolvemos as tags com:

<React.Fragment>
</React.Fragment>
*/
