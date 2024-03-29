function initTabNav() {
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
}

initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((click) => {
    click.addEventListener("click", scrollToSection);
  });
}

initScrollSuave();

function initScrollAnimation() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const halfWindow = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionToTop = section.getBoundingClientRect().top;

        const isSectionVisible = sectionToTop - halfWindow < 0;

        if (isSectionVisible) {
          section.classList.add("ativo");
        }
      });
    }
  }

  animaScroll();

  window.addEventListener("scroll", animaScroll);
}

initScrollAnimation();
