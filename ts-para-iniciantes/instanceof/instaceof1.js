"use strict";
class Produto2 {
    nome;
    preco;
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    precoReal() {
        return `R$ ${this.preco},00`;
    }
}
const livro = new Produto2("Olhai os lírios do campo", 300);
// console.log(livro.precoReal());
// console.log(livro instanceof Produto2);
class Livro {
    autor;
    constructor(autor) {
        this.autor = autor;
    }
}
class Jogo {
    jogadores;
    constructor(jogadores) {
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === "O Hobbit") {
        return new Livro("J. R. R. TOLKIEN");
    }
    if (busca === "It takes two") {
        return new Jogo(2);
    }
    return null;
}
const produto = buscarProduto("O Hobbit");
if (produto instanceof Livro) {
    console.log(produto.autor);
}
