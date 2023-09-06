// Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
}
//   errado : console.log(var, marca, portas);
console.log(cor);

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
const numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

//var dentro do for se torna uma redeclaração da variável de fora, pois var vaza do escopo, então mudando para let esse problema não ocorre

const total = 10 * numero;
console.log(total);
