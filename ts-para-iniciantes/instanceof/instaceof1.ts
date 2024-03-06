class Produto2 {
  nome: string;
  preco: number;
  constructor(nome: string, preco: number) {
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
  autor: string;
  constructor(autor: string) {
    this.autor = autor;
  }
}

class Jogo {
  jogadores: number;
  constructor(jogadores: number) {
    this.jogadores = jogadores;
  }
}

function buscarProduto(busca: string) {
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
