export function mega (qtde = 6, numeros = []) {
    qtde = +qtde // +qtde converte para valores numéricos
    
    if (qtde < 6 && qtde > 60) {
        throw "Quantidade Inválida!"
    }

     // a condição de parada é que a quantidade de elementos do array seja igual à quantidade de números que eu quero gerar

    if (numeros.length === qtde) {
        return numeros.sort((n1, n2) => n1 - n2)
    }

    const numeroAleatorio = parseInt(Math.random() * 60) + 1
    if(!numeros.includes(numeroAleatorio)) {
        return mega(qtde, [...numeros, numeroAleatorio])
    } else {
        return mega(qtde, numeros)
    }

}
console.log(mega())

// throw lança uma exceção definida pelo usuário. A execução da função atual vai parar (as instruções após o throw não serão executadas), e o controle será passado para o primeiro bloco catch na pilha de chamadas.

// .sort()... ordena os números de forma crescente, n2 - n1 descrescente