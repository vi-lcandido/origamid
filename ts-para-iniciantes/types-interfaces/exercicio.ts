async function fecthProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");

  const data = await response.json();

  showProduct(data);
}

fecthProduct();

interface ProductProps {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: CompanyProps;
  empresaMontadora: CompanyProps;
}

interface CompanyProps {
  nome: string;
  fundacao: number;
  pais: string;
}

function showProduct(data: ProductProps) {
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
