// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const copyRight = document.querySelector(".copy");

const cloneMenu = menu.cloneNode(true);
copyRight.appendChild(cloneMenu);
// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector(".faq");
const primeiroDt = faq.querySelector("dt");

// console.log(primeiroDt);

// Selecione o DD referente ao primeiro DT
const primeiroDd = primeiroDt.nextElementSibling;

console.log(primeiroDd);

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector(".animais");

faq.innerHTML = animais.innerHTML;
