// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector("img");
const imagemParaTop = primeiraImg.offsetTop;

console.log(imagemParaTop);
// Retorne a soma da largura de todas as imagens

function somaLarguraImg() {
  const imgs = document.querySelectorAll("img");
  let soma = 0;
  imgs.forEach((img) => {
    soma += img.offsetWidth;
  });
  console.log(soma);
}

window.onload = function () {
  somaLarguraImg();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll("a");

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;

  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, "possui acessibilidade");
  } else {
    console.log(link, "não possui acessibilidade");
  }
});
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia("(max-width:720px)").matches;

if (browserSmall) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
  console.log(menu.classList);
}
