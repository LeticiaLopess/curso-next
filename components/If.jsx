export default function If(props) {
    if(props.teste) {
        return props.children
    } else {
        return null
    }
}

// props.children - filhos que estão dentro do componente If