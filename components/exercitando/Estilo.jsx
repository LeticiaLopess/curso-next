export default function Estilo(props) {

const classeAplicada = props.numero >= 0 ? "azul" : "vermelho"

    return (
        <div>
            <h1 style ={{backgroundColor: props.numero >= 0 ? "green" : "pink", 
            color: props.color,
            textAlign: props.direita ? "right" : "left"}}>
                Texto
            </h1>
            <h2 className={classeAplicada}>Texto #02</h2> 
        </div>
    ) // ou eu coloco o conteúdo de classeAplicada dentro dos co
}

// no uso do JavaScript não podemos usar hífen como por exemplo: background-color. Usamos, nesse caso, backgroundColor

// props.color - a cor foi definda em usandoEstilo.jsx

// Estilos condicionais

// "azul" e "vermelha" em styles -> globals.css