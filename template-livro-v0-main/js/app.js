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
  toggleModal(); // livia
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
  // if ("dislexia" in localStorage) {
  //   let dislexia;
  //   "on" === localStorage.getItem("dislexia") &&
  //     (bodyPush.classList.add("dislexia"), (modoDislexia.checked = !0));
  // } else localStorage.setItem("dislexia", "off"), (modoDislexia.checked = !1);
}
modalClose.addEventListener("click", function () {
  modalAjustes.classList.remove("habilitado"),
    modalAjustes.classList.remove("show"),
    navAjustes.focus(),
    navAjustes.classList.remove("desabilitado"),
    navAjustes.classList.add("habilitado");
  toggleModal(); // livia
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
// const modoDislexia = document.querySelector("#dislexia");
// modoDislexia.addEventListener("change", () => {
//   modoDislexia.checked
//     ? (localStorage.setItem("dislexia", "on"),
//       bodyPush.classList.add("dislexia"),
//       console.log("dislexia on"))
//     : (localStorage.setItem("dislexia", "off"),
//       bodyPush.classList.remove("dislexia"),
//       console.log("dislexia off"));
// });
// alteração do tamanho da fonte
// const main = document.querySelector("main"),
//   mainStyles = getComputedStyle(main);
// let mainFontSize = mainStyles.fontSize;
// const btnAmplia = document.querySelector("#btn-amplia");
// function ampliar() {
//   let mainFontSize = mainStyles.fontSize,
//     zoom;
//   mainFontSize = `${Number.parseInt(mainFontSize) + 2}px`;
//   let finalFS = mainFontSize;
//   (main.style.fontSize = finalFS), localStorage.setItem("zoom", finalFS);
// }
// btnAmplia.addEventListener("click", ampliar);
// const btnReduz = document.querySelector("#btn-reduz");
// function reduzir() {
//   let mainFontSize = mainStyles.fontSize,
//     zoom;
//   mainFontSize = `${Number.parseInt(mainFontSize) - 2}px`;
//   let finalFS = mainFontSize;
//   (main.style.fontSize = finalFS), localStorage.setItem("zoom", finalFS);
// }
// btnReduz.addEventListener("click", reduzir);
// const btnPadrao = document.querySelector("#btn-padrao");
// function padroniza() {
//   let mainFontSize = mainStyles.fontSize,
//     zoom;
//   mainFontSize = "16px";
//   let finalFS = "16px";
//   (main.style.fontSize = "16px"), localStorage.setItem("zoom", "16px");
// }
// btnPadrao.addEventListener("click", padroniza);

const main = document.querySelector("main"); //querySelector pega o primeiro elemento com essa tag/classe/id
const nota = document.querySelector("#nota-tamanho-texto");
const btnAmplia = document.querySelector("#btn-amplia");
const btnReduz = document.querySelector("#btn-reduz");
const btnPadrao = document.querySelector("#btn-padrao");
const marcador = document.querySelector(".circle");

let posicaoMarcador = getComputedStyle(marcador).getPropertyValue("--eixo-x");
let setMarkerPosition = +posicaoMarcador;

const fontSizes = ["12px", "14px", "16px", "20px", "24px", "28px", "32px"];
let currentFontSize = "16px";

// Função para atualizar o tamanho da fonte e o armazenamento local
function atualizarFonte() {
  main.style.fontSize = currentFontSize;
  localStorage.setItem("zoom", currentFontSize);
}

// atualiza a nota e as cores dos botões
function atualizaNota() {
  // Remove a classe ajuste-limite de todos os botões
  btnAmplia.classList.remove('ajuste-limite');
  btnReduz.classList.remove('ajuste-limite');

  // Atualiza a nota e destaca o botão correspondente
  if (currentFontSize === "32px") {
    nota.innerHTML = 'Você selecionou: <b>32px</b>. Este é o maior tamanho de texto disponível.';
    btnAmplia.classList.add('ajuste-limite');
  }
  else if (currentFontSize === "16px") {
    nota.innerHTML = 'Você selecionou: <b>16px</b>. Este é o tamanho de texto recomendado para você.';
  }
  else if (currentFontSize === "12px") {
    nota.innerHTML = 'Você selecionou: <b>12px</b>. Este é o menor tamanho de texto disponível.';
    btnReduz.classList.add('ajuste-limite');
  } else {
    nota.innerHTML = 'Você selecionou: <b>' + currentFontSize + '</b>.';
  }
}

// Função para ajustar o tamanho dos círculos na escala
function updateScale(fontSize) {
  const circles = document.querySelectorAll('.circle');
  circles.forEach((circle, index) => {
    circle.style.left = `calc(${272 * (index / 5)}px + ${fontSize}px)`;
  });
}

function atualizaMarcador() {
  if (currentFontSize === "12px") {
    setMarkerPosition = 0;
  }
  else if (currentFontSize === "14px") {
    setMarkerPosition = 16;
  }
  else if (currentFontSize === "16px") {
    setMarkerPosition = 32;
  }
  else if (currentFontSize === "20px") {
    setMarkerPosition = 48;
  }
  else if (currentFontSize === "24px") {
    setMarkerPosition = 64;
  }
  else if (currentFontSize === "28px") {
    setMarkerPosition = 80;
  }
  else if (currentFontSize === "32px") {
    setMarkerPosition = 96;
  }
  marcador.style.setProperty("--eixo-x", `${setMarkerPosition}%`);
}

// Função para aumentar o tamanho da fonte
function ampliar() {
  const currentIndex = fontSizes.indexOf(currentFontSize);
  if (currentIndex < fontSizes.length - 1) {
    currentFontSize = fontSizes[currentIndex + 1];
    // setMarkerPosition = setMarkerPosition + 16;
    // marcador.style.setProperty("--eixo-x", `${setMarkerPosition}%`);
    atualizaMarcador();
    atualizarFonte();
    atualizaNota();
  }
}

// Função para diminuir o tamanho da fonte
function reduzir() {
  const currentIndex = fontSizes.indexOf(currentFontSize);
  if (currentIndex > 0) {
    currentFontSize = fontSizes[currentIndex - 1];
    // setMarkerPosition = setMarkerPosition - 16;
    // marcador.style.setProperty("--eixo-x", `${setMarkerPosition}%`);
    atualizaMarcador();
    atualizarFonte();
    atualizaNota();
  }
}

// function aumentaMarcador() {
//   setMarkerPosition = setMarkerPosition + 16;
//   marcador.style.setProperty("--eixo-x", `${setMarkerPosition}%`);
// }

// function diminuiMarcador() {
//   setMarkerPosition = setMarkerPosition - 16;
//   marcador.style.setProperty("--eixo-x", `${setMarkerPosition}%`);
// }

// function resetaMarcador() { 
//   setMarkerPosition = 32;
//   marcador.style.setProperty("--eixo-x", `${setMarkerPosition}%`);
// }

// Função para definir o tamanho padrão da fonte
function padroniza() {
  currentFontSize = "16px";
  // setMarkerPosition = setMarkerPosition + 20;
  // setMarkerPosition = 32;
  // marcador.style.setProperty("--eixo-x", `${setMarkerPosition}%`);
  atualizaMarcador();
  atualizarFonte();
  atualizaNota();
}

// Adiciona os ouvintes de evento aos botões
btnAmplia.addEventListener("click", ampliar);
btnReduz.addEventListener("click", reduzir);
btnPadrao.addEventListener("click", padroniza);

// Inicializa o tamanho da fonte ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const savedZoom = localStorage.getItem("zoom");
  if (savedZoom && fontSizes.includes(savedZoom)) {
    currentFontSize = savedZoom;
  } else {
    currentFontSize = "16px";
  }
  atualizaMarcador();
  atualizarFonte();
  atualizaNota(); // Atualiza a nota e as cores dos botões ao carregar a página
});
