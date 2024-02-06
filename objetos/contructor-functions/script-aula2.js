// const Dom = {
//   seletor: "li",
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     this.element().classList.add("ativar");
//   },
// };

function Dom(selector) {
  (this.element = function () {
    return document.querySelector(selector);
  }),
    (this.ativar = function () {
      this.element().classList.add("ativar");
    });
}

const li = new Dom("li");
const ul = new Dom("ul");
