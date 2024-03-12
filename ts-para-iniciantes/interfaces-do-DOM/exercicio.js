"use strict";
// 1 - Selecione os elementos com a classe link.
// 2 - Crie uma função que deve ser executada para cada elemento.
// 3 - Modificar através da função o estilo da color e border.
const links = document.querySelectorAll(".link");
links.forEach((link) => {
    //HTMLAnchorElement e HTMLButtonElement herdam de HTMLElement então ambos serão ativados na minha fç
    if (link instanceof HTMLElement) {
        mudarCorEBorda(link);
    }
});
//para mudar a cor e borda de element, ou seja, alterar o style, portanto ele precisa ser um HTMLElement para alterar style da tag a e button
function mudarCorEBorda(element) {
    element.style.border = "2px solid purple";
    element.style.color = "red";
}
