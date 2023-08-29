// Verifique se a sua idade é maior do que a de algum parente
var minhaIdade = 67;
var IdadeParente = 60;

console.log(minhaIdade > IdadeParente);
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
if (minhaIdade > IdadeParente) {
  console.log("é maior");
} else if (minhaIdade === IdadeParente) {
  console.log("é igual");
} else {
  console.log("é menor");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2; //3 -> retorna o último verdadeiro qnd achar
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; //true
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroNaConta = 0; //false
console.log(
  !!nome,
  !!idade,
  possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta
);
// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("brasil tem mais habitantes que china");
} else if (brasil === china) {
  console.log("brasil e china  tem mesma habitantes");
} else {
  console.log("brasil tem menos habitantes que china");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
//Falso

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão"); //Cão
} else {
  console.log("Falso");
}
