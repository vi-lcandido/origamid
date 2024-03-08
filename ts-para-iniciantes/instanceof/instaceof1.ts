class Produto2 {
  nome: string;
  // preco: number;
  constructor(
    nome: string
    //  preco: number
  ) {
    this.nome = nome;
    // this.preco = preco;
  }
  // precoReal() {
  //   return `R$ ${this.preco},00`;
  // }
}

class Livro extends Produto2 {
  autor: string;
  constructor(nome: string, autor: string) {
    super(nome);
    this.autor = autor;
  }
}

class Jogo extends Produto2 {
  jogadores: number;
  constructor(nome: string, jogadores: number) {
    super(nome);
    this.jogadores = jogadores;
  }
}

function buscarProduto(busca: string) {
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
