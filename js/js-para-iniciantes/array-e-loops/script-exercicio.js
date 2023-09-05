// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var copasGanhas = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (let index = 0; index < copasGanhas.length; index++) {
  /* const ano = copasGanhas[index];
   console.log(`O Brasil ganhou a copa de ${ano}`); OU */
  console.log(`O Brasil ganhou a copa de ${copasGanhas[index]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melancia"];

for (let index = 0; index < frutas.length; index++) {
  const fruta = frutas[index];
  console.log(fruta);
  if (fruta === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

/*frutas.forEach((fruta) => {
  if (fruta === "Melancia") {
    let ultimaFruta = fruta;
    console.log(
      `${ultimaFruta} é a última fruta da lista. ${frutas} é a lista completa`
    );
  }
});
OU;
*/

var ultimaFruta = frutas[frutas.length - 1];
console.log(`A última fruta é: ${ultimaFruta}`);
