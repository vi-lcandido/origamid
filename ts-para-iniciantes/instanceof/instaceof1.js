"use strict";
class Produto2 {
    nome;
    // preco: number;
    constructor(nome
    //  preco: number
    ) {
        this.nome = nome;
        // this.preco = preco;
    }
}
class Livro extends Produto2 {
    autor;
    constructor(nome, autor) {
        super(nome);
        this.autor = autor;
    }
}
class Jogo extends Produto2 {
    jogadores;
    constructor(nome, jogadores) {
        super(nome);
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === "O Hobbit") {
        return new Livro("O Hobbit", "J. R. R. TOLKIEN");
    }
    if (busca === "It takes two") {
        return new Jogo("It takes two", 2);
    }
    return null;
}
const produto = buscarProduto("It takes two");
if (produto instanceof Livro) {
    console.log(produto.autor);
}
// if (produto instanceof Jogo) {
//   console.log(produto.nome);
// }
if (produto instanceof Produto2) {
    console.log(produto.nome);
}
