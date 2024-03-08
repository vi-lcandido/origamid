"use strict";
// 1 - Selecione o link utilizando o método getElementById.
// 2 - Substitua o href do link (HTMLAnchorElement) de http:// para https://.
const anchorElement = document.getElementById("origamid");
if (anchorElement instanceof HTMLAnchorElement) {
    anchorElement.href = anchorElement.href.replace("http://", "https://");
}
