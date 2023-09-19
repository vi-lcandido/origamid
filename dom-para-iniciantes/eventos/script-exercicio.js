// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  console.log(event);
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
}

linksInternos.forEach((link) => {
  link.addEventListener("click", handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll("body *");
console.log(todosElementos);

function handleClick(event) {
  event.preventDefault();
  console.log(event.currentTarget);
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener("click", handleClick);
});
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function handleRemove(event) {
  event.preventDefault();
  console.log(event.currentTarget.remove());
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener("click", handleRemove);
});
// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleKey(event) {
  event.preventDefault();
  if (event.key === "t") {
    document.documentElement.classList.toggle("textomaior");
  }
}

window.addEventListener("keypress", handleKey);
