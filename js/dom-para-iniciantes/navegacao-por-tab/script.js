const tabAnimal = document.querySelectorAll(".js-tabanimal li");
const tabContent = document.querySelectorAll(".js-tabcontent section");

if (tabAnimal.length && tabContent.length) {
  tabContent[0].classList.add("ativo");

  function activeTab(index) {
    tabContent.forEach((content) => content.classList.remove("ativo"));
    tabContent[index].classList.add("ativo");
  }

  tabAnimal.forEach((itemAnimal, index) => {
    itemAnimal.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
