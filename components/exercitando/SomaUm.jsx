// propriedades são apenas leitura, não conseguiríamos mexer nos valores internos. Para que a gente consiga gerenciar os valores internos de um componente


export default function SomaUm(props) {
    // props.numero++ = dá erro, pois é somente leitura
    return (
        <div>
            <h1>{props.numero + 1}</h1>
        </div>
    )
}