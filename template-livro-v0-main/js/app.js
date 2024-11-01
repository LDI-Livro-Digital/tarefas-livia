const btnToTop = document.querySelector("#voltar-topo");
btnToTop.addEventListener("click", function (e) {
  e.preventDefault(), window.scrollTo({ top: 0, behavior: "smooth" });
});
const barraDeBusca = document.querySelector("#barra-de-busca");
document.addEventListener("DOMContentLoaded", function () {
  const pushBarra = fetch("components/barra-de-busca.php");
  let formBarra;
  pushBarra.then((resposta) => {
    resposta.text().then((body) => {
      const el = body,
        elHTML = document.createElement("div");
      (elHTML.innerHTML = el),
        (formBarra = elHTML.firstChild),
        barraDeBusca.appendChild(formBarra),
        setupEvents();
    });
  });
});
let msgErro = document.getElementById("erro");
const setupEvents = () => {
  (document.getElementById("searchButton").onclick = (event) => {
    if (
      (event.preventDefault(),
      document.getElementById("searchText").value.includes(">") ||
        document.getElementById("searchText").value.includes("<") ||
        document.getElementById("searchText").value.includes("\\") ||
        document.getElementById("searchText").value.includes("/"))
    )
      (msgErro.innerText = "Erro: Símbolo não permitido."),
        msgErro.classList.add("ativo");
    else if (document.getElementById("searchText").value.length < 3)
      (msgErro.innerText =
        "Erro: digite, no mínimo, três caracteres para fazer a pesquisa."),
        msgErro.classList.add("ativo");
    else {
      let query = document.getElementById("searchText").value,
        url = document.location.href.split("/");
      url.pop(),
        url.push("busca.php?query=" + query),
        (url = url.join("/")),
        (document.location = url);
    }
  }),
    document.getElementById("searchText").addEventListener("keyup", (event) => {
      event.preventDefault(),
        document.getElementById("searchText").value.length > 2 &&
          13 === event.keyCode &&
          document.getElementById("searchButton").click();
    });
};
(getWordParam = () => {
  const params = new URLSearchParams(window.location.search),
    preambule = params.get("preambule"),
    word = params.get("word");
  return { preambule: preambule, word: word };
}),
  (jumpToWord = (preambule, word) => {
    const options = [
      (aCaseSensitive = !1),
      (aBackwards = !1),
      (aWrapAround = !0),
      (aWholeWord = !1),
      (aSearchInFrames = !0),
      (aShowDialog = !0),
    ];
    window.find(decodeURIComponent(preambule), ...options),
      window.find(decodeURIComponent(word), ...options);
  }),
  document.addEventListener("DOMContentLoaded", () => {
    const params = getWordParam();
    jumpToWord(params.preambule, params.word);
  });
const navAjustes = document.querySelector("#nav-ajustes"),
  modalAjustes = document.querySelector("#modal-ajustes");
document.addEventListener("DOMContentLoaded", function () {
  navAjustes.classList.add("js"), Tema();
});
const modalLabel = modalAjustes.querySelector("#modal-ajustes-label");
navAjustes.addEventListener("click", function (e) {
  e.preventDefault(),
    modalAjustes.classList.add("show"),
    setTimeout(() => {
      modalAjustes.classList.add("habilitado");
    }, 100),
    setTimeout(() => {
      modalLabel.focus();
    }, 200),
    this.classList.remove("habilitado"),
    this.classList.add("desabilitado");
});
const modalClose = document.querySelector("#modal-close");
function Tema() {
  if ("bg" in localStorage) {
    let bg = localStorage.getItem("bg");
    bodyPush.classList.add(bg);
    const fundoVariavel = "#fundo-" + bg;
    let fundoBG;
    document.querySelector(fundoVariavel).classList.add("ativo");
  } else
    localStorage.setItem("bg", "branco"), fundoBranco.classList.add("ativo");
  if ("zoom" in localStorage) {
    let zoom = localStorage.getItem("zoom");
    (main.style.fontSize = zoom),
      console.log(
        "O ajuste do tamanho de fonte está ativado 😃\nPadrão: 20px\n" +
          `Atual: ${main.style.fontSize}`
      );
  } else
    localStorage.setItem("zoom", mainFontSize),
      console.log("Tamanho de fonte padrão: 20px");
  if ("dislexia" in localStorage) {
    let dislexia;
    "on" === localStorage.getItem("dislexia") &&
      (bodyPush.classList.add("dislexia"), (modoDislexia.checked = !0));
  } else localStorage.setItem("dislexia", "off"), (modoDislexia.checked = !1);
}
modalClose.addEventListener("click", function () {
  modalAjustes.classList.remove("habilitado"),
    modalAjustes.classList.remove("show"),
    navAjustes.focus(),
    navAjustes.classList.remove("desabilitado"),
    navAjustes.classList.add("habilitado");
}),
  document.addEventListener("click", function (event) {
    "habilitado" != modalAjustes.classList[1] ||
      event.target.closest("#modal-ajustes, #nav-ajustes") ||
      (modalAjustes.classList.remove("habilitado"),
      modalAjustes.classList.remove("show"),
      navAjustes.focus(),
      navAjustes.classList.remove("desabilitado"),
      navAjustes.classList.add("habilitado"));
  });
const fundoBtns = document.querySelectorAll(".modal-item-options button");
function ativar(elemento) {
  fundoBtns.forEach((btn) => {
    btn.classList.remove("ativo");
  }),
    elemento.classList.add("ativo");
}
const bodyPush = document.body,
  fundoCreme = document.querySelector("#fundo-creme"),
  fundoBranco = document.querySelector("#fundo-branco"),
  fundoEscuro = document.querySelector("#fundo-escuro");
fundoCreme.addEventListener("click", () => {
  localStorage.setItem("bg", "creme"),
    bodyPush.classList.remove("escuro", "branco"),
    bodyPush.classList.add("creme"),
    ativar(fundoCreme);
}),
  fundoBranco.addEventListener("click", () => {
    localStorage.setItem("bg", "branco"),
      bodyPush.classList.remove("escuro", "creme"),
      bodyPush.classList.add("branco"),
      ativar(fundoBranco);
  }),
  fundoEscuro.addEventListener("click", () => {
    localStorage.setItem("bg", "escuro"),
      bodyPush.classList.remove("creme", "branco"),
      bodyPush.classList.add("escuro"),
      ativar(fundoEscuro);
  });
const modoDislexia = document.querySelector("#dislexia");
modoDislexia.addEventListener("change", () => {
  modoDislexia.checked
    ? (localStorage.setItem("dislexia", "on"),
      bodyPush.classList.add("dislexia"),
      console.log("dislexia on"))
    : (localStorage.setItem("dislexia", "off"),
      bodyPush.classList.remove("dislexia"),
      console.log("dislexia off"));
});
const main = document.querySelector("main"),
  mainStyles = getComputedStyle(main);
let mainFontSize = mainStyles.fontSize;
const btnAmplia = document.querySelector("#btn-amplia");
function ampliar() {
  let mainFontSize = mainStyles.fontSize,
    zoom;
  mainFontSize = `${Number.parseInt(mainFontSize) + 2}px`;
  let finalFS = mainFontSize;
  (main.style.fontSize = finalFS), localStorage.setItem("zoom", finalFS);
}
btnAmplia.addEventListener("click", ampliar);
const btnReduz = document.querySelector("#btn-reduz");
function reduzir() {
  let mainFontSize = mainStyles.fontSize,
    zoom;
  mainFontSize = `${Number.parseInt(mainFontSize) - 2}px`;
  let finalFS = mainFontSize;
  (main.style.fontSize = finalFS), localStorage.setItem("zoom", finalFS);
}
btnReduz.addEventListener("click", reduzir);
const btnPadrao = document.querySelector("#btn-padrao");
function padroniza() {
  let mainFontSize = mainStyles.fontSize,
    zoom;
  mainFontSize = "16px";
  let finalFS = "16px";
  (main.style.fontSize = "16px"), localStorage.setItem("zoom", "16px");
}
btnPadrao.addEventListener("click", padroniza);
