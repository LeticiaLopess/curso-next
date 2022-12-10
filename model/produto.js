export default class Produto {
    #id
    #nome
    #preco

    constructor(id, nome, preco) {
        this.#id = id
        this.#nome = nome
        this.#preco = preco
    }

    get id() { // atributo
        return this.#id
    }
    
    get nome() {
        return this.#nome
    }
    
    get preco() {
        return this.#preco
    }
}

// método get - acessa atributos
// getId()

/* this:

 * this é usado dentro de uma função (digamos função “A”) e ele contém o valor do objeto que invoca a função A.

 * no contexto de execução global (fora de qualquer função), this refere-se ao objeto global, seja em modo estrito ou não
 */