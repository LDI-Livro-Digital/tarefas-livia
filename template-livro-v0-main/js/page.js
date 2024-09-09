const linkInicio = document.querySelector("#link-inicio");
document.addEventListener("DOMContentLoaded", function () {
  linkInicio.classList.add("js");
});
const contentBar = document.querySelector(".content-bar");
window.addEventListener("scroll", function () {
  const windowScrollTop = window.pageYOffset,
    windowScreen = window.innerHeight,
    mainContent = document.documentElement.offsetHeight,
    calcI = mainContent - windowScreen,
    calcII = windowScrollTop / calcI,
    calcFinal = 100 * calcII,
    barWidth = (contentBar.style.width = `${calcFinal}` + "%");
});
const navMenu = document.querySelector("#nav-menu"),
  menu = document.querySelector("#menu");
document.addEventListener("DOMContentLoaded", function () {
  navMenu.classList.add("js"), menu.classList.add("js");
}),
  navMenu.addEventListener("click", function (event) {
    menu.classList.remove("hide"),
      menu.classList.add("show"),
      setTimeout(() => {
        menu.classList.add("habilitado");
      }, 100),
      (voltarInicio = document.querySelector("#voltar-inicio")),
      voltarInicio.focus(),
      this.classList.add("desabilitado");
  });
const menuClose = document.querySelector("#menu-close");
menuClose.addEventListener("click", function () {
  menu.classList.remove("show"),
    menu.classList.remove("habilitado"),
    setTimeout(() => {
      menu.classList.add("hide");
    }, 500),
    navMenu.focus(),
    navMenu.classList.remove("desabilitado");
}),
  document.addEventListener("click", function (event) {
    const telaLargura = window.innerWidth;
    telaLargura < 1288 &&
      "habilitado" == menu.classList[1] &&
      !event.target.closest("#menu, #nav-menu") &&
      (menu.classList.remove("habilitado"),
        menu.classList.add("desabilitado"),
        navMenu.focus(),
        navMenu.classList.remove("desabilitado"));
  });
const url = document.URL.split("/").pop().split("#")[0].split("?")[0],
  sumarioLinks = document.querySelectorAll(".sumario > li > a");
sumarioLinks.forEach((linkSumario) => {
  let link;
  linkSumario.href.split("/").pop() === url &&
    linkSumario.parentElement.classList.add("atual");
});
const sectionSubtitulo = document.querySelectorAll("section"),
  titleSubtitulo = document.querySelectorAll(
    ".capitulo.atual .intertitulos li a"
  );
function subtituloAtivo() {
  sectionSubtitulo.forEach((section, index) => {
    const topoDOM = window.pageYOffset,
      topoSec = section.offsetTop - 130,
      heightSec = section.getBoundingClientRect().height;
    topoSec < topoDOM && topoSec + heightSec >= topoDOM
      ? titleSubtitulo[index].classList.add("ativo")
      : titleSubtitulo[index].classList.remove("ativo");
  });
}
titleSubtitulo.length >= 1 && window.addEventListener("scroll", subtituloAtivo),
  titleSubtitulo.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const url = this.getAttribute("href"),
        sectionHref = url.split("#").pop(),
        sectionElemento = document.querySelector(`#${sectionHref}`),
        sectionTop = sectionElemento.offsetTop;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    });
  });
const notasLinks = document.querySelectorAll("#notas a[href^='#']"),
  refLinks = document.querySelectorAll("a[href^='#ref']"),
  mainPage = document.querySelector("main.page");
function scrollNotas(e) {
  e.preventDefault();
  const url = this.getAttribute("href"),
    notaTexto = document.querySelector(url),
    notaTop = notaTexto.getBoundingClientRect().top + window.scrollY;
  let notaTopGeral = notaTop - 100;
  window.scrollTo({ top: notaTopGeral, behavior: "smooth" });
}
notasLinks.forEach((item) => {
  item.addEventListener("click", scrollNotas);
}),
  refLinks.forEach((item) => {
    item.addEventListener("click", scrollNotas);
  });

//alteracoes livia
const titulo = document.querySelector('.titulo-livro-navbar');
let prevScrollpos = window.scrollY;

window.onscroll = function () {
  const currentScrollPos = window.scrollY;
  const button = document.getElementById('nav-ajustes');

  console.log('Previous Scroll Position:', prevScrollpos);
  console.log('Current Scroll Position:', currentScrollPos);

  // Verifica se o modal está fechado
  if (prevScrollpos > currentScrollPos && !button.classList.contains('on')) {
    // Rolagem para cima e o modal está fechado
    titulo.classList.remove('hidden');
  } else if (!button.classList.contains('on')) {
    // Rolagem para baixo e o modal está fechado
    titulo.classList.add('hidden');
  }

  prevScrollpos = currentScrollPos;
};

function toggleModal() {
  const button = document.getElementById('nav-ajustes');

  // Alterna a classe 'on' para indicar que o modal está aberto ou fechado
  button.classList.toggle('on');

  if (button.classList.contains('on')) {
    // Se o modal está aberto, esconde o título
    titulo.classList.add('hidden');
  } else {
    // Quando o modal fecha, exibe o título imediatamente
    titulo.classList.remove('hidden');
  }
}
