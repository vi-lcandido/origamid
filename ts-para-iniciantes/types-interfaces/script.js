"use strict";
function preencherDados(dados) {
    document.body.innerHTML = `
  <div>
  <h2>${dados.nome}</h2>
  <p>${dados.preco}</p>
  <p>Inclui teclado? ${dados.teclado ? "Sim" : "Não"}</p>
  </div>
  `;
}
const computador = {
    nome: "Computador",
    preco: 2000,
    teclado: true,
};
preencherDados(computador);
function escolherFruta(frutas) {
    if (frutas === "siriguela") {
        console.log("melhor fruta");
    }
}
escolherFruta("siriguela");
