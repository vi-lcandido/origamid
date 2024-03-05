"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fecthProduct() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.origamid.dev/json/notebook.json");
        const data = yield response.json();
        showProduct(data);
    });
}
fecthProduct();
function showProduct(data) {
    document.body.innerHTML = `
    <div>
    <h2>${data.nome}</h2>
    <p>R$ ${data.preco}</p>
    <p>${data.descricao}</p>
    <p>${data.garantia}</p>
    <p>Tem seguro acidente? ${data.seguroAcidentes ? "Sim" : "Não"}</p>
    <h3>Dados da fabricante: </h3>
    <p>${data.empresaFabricante.nome}</p>
    <p>${data.empresaMontadora.nome}</p>
    </div>
    `;
}
