import Produto from "../model/produto";

export default [
    new Produto(1, "iPad", 7543),
    new Produto(2, "Monitor 24", 949),
    new Produto(3, "Computador Gamer", 6949),
    new Produto(4, "Samsung S20+", 2800),
]

// definição de produtos referentes à função em produto.js

// evitar o mesmo uso de id pois a chave deve ser única