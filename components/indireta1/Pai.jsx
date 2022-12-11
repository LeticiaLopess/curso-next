import Filho from "./Filho";

export default function Pai(props) {

    function falarComigo(param1, param2, param3) {
        console.log(param1, param2, param3)
    }

    return (
        <div>
            <Filho funcao={falarComigo} /> 
        </div>
    )
}

// como passar uma informação do componente filho para o componente pai sendo que  filho não tem nenhuma ligação com pai

// para haver comunicação indireta, antes deve ter comunicação direta. O pai deve passar alguma coisa pro filho para que o filho responda quando necessário

// ao invés de passarmos uma string/número, passamos uma função como parâmentro de um componente para outro

/*
<Filho funcao={falarComigo} = comunicação direta
*/