type Produto = {
  nome: string;
  preco: number;
  teclado: boolean;
};

function preencherDados(dados: Produto) {
  document.body.innerHTML = `
  <div>
  <h2>${dados.nome}</h2>
  <p>${dados.preco}</p>
  <p>Inclui teclado? ${dados.teclado ? "Sim" : "Não"}</p>
  </div>
  `;
}

const computador: Produto = {
  nome: "Computador",
  preco: 2000,
  teclado: true,
};

preencherDados(computador);

type Frutas = "cajá" | "uva" | "siriguela";

function escolherFruta(frutas: Frutas) {
  if (frutas === "siriguela") {
    console.log("melhor fruta");
  }
}

escolherFruta("siriguela");

//============== INTERFACE ===============
interface Produtoprops {
  nome: string;
  preco: number;
  teclado: boolean;
}

function preencherDadosInterface(dados: Produtoprops) {
  document.body.innerHTML = `
  <div>
  <h2>${dados.nome}</h2>
  <p>${dados.preco}</p>
  <p>Inclui teclado? ${dados.teclado ? "Sim" : "Não"}</p>
  </div>
  `;
}

const tecnologia: Produtoprops = {
  nome: "Laptop",
  preco: 1800,
  teclado: false,
};

preencherDadosInterface(tecnologia);
