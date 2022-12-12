import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"

export default function contador() {

    const [numero, setNumero] = useState(0) // setNumero = função

    // const inc = () => setNumero(numero + 1) [arrow function]: está diretamente no onClick
    
    function dec() {
        setNumero(numero - 1)
    }

    return (
        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems: "center",
        }}>
            <h1>Contador</h1>
            <ContadorDisplay numero={numero}/>  

            <div>
            <button onClick={dec} style={{width: 40, height: 40}}> - </button>
            <button onClick={() => setNumero(numero + 1)} style={{width: 40, height: 40}}> + </button>
            </div>
        </div>
    )
}

// trabalhar com o evento chamando funçao

// estado do componente useState

// useState é conhecido no react como React Hooks - forma de usar alguns recursos do react que antes só estava disponível para funções baseadas em classe, é uma forma de acessar recursos / componentes baseados em funções

// useState: retorna um par - o valor do state atual e uma função que permite atualizá-lo. Você pode chamar essa função a partir de um manipulador de evento ou de qualquer outro lugar. É parecido com this. setState em uma classe, exceto que não mescla o antigo state com o novo
