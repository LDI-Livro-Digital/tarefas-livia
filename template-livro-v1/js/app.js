

document.addEventListener("DOMContentLoaded", () => {
  const abrirAjustesTexto = document.getElementById("abrir-ajustes-texto");
  const modalAjustesTexto = document.getElementById("modal-ajustes-texto");
  const modalAjustesContent = document.querySelector("#modal-ajustes .container-content");



  // Abrir o modal ao clicar na li
  abrirAjustesTexto.addEventListener("click", () => {
    modalAjustesTexto.classList.add("show"); // Abre o modal
    modalAjustesContent.classList.remove("show");

    const interval = setInterval(() => {
      const fecharAjustesTexto = document.getElementById("submodal-retorno-ajustes-texto");
      if (fecharAjustesTexto) {
        // Se o botão de fechar existir, adiciona o evento de fechar
        modalAjustesContent.classList.remove("show");

        fecharAjustesTexto.addEventListener("click", () => {
          modalAjustesTexto.classList.remove("show"); // Fecha o modal
          modalAjustesContent.classList.add("show");

        });

        clearInterval(interval); // Limpa o intervalo depois de adicionar o listener
      }
    }, 100); // Verifica a cada 100ms até o botão aparecer
  });
});





// INICIO DA FONTE
//-- tipografia

document.addEventListener("DOMContentLoaded", () => {

  const sizeFont = [12, 14, 16, 20, 24, 28, 32];
  let indexFonte = 2;

  const aumentaFonte = document.querySelector('#btn-fonte-aumenta');
  const diminuiFonte = document.querySelector('#btn-fonte-diminui');
  const resetaFonte = document.querySelector('#btn-fonte-normal');

  const body = document.getElementById('conteudo-pagina');
  const body1 = document.getElementById('cover'); // nao to conseguindo aplicar o aumento de fonte na página inicial
  const notaFonte = document.querySelector('#nota-adicional-fonte');
  const tamanhoFonte = document.querySelector('#tamanho-fonte');
  const barFillFonte = document.getElementById("barra-fill-fonte");


  aumentaFonte.addEventListener('click', function () {

    if (indexFonte < 6) {
      indexFonte++;
      updateBarFonte();
    }
  });

  diminuiFonte.addEventListener('click', function () {
    if (indexFonte > 0) {
      indexFonte--;
      updateBarFonte();
    }
  });

  resetaFonte.addEventListener('click', function () {
    indexFonte = 2;
    // body.style.fontSize = fontSize + 'px';
    updateBarFonte();
  });

  /**
   * Função seguindo o padrão de tamanho de texto/notas do design
   */
  function updateBarFonte() {
    barFillFonte.style.width = `${(indexFonte / 6 * 100)}%`; // Ajusta a largura relativa
    const fontSize = sizeFont[indexFonte];
    body.style.fontSize = fontSize + 'px';
    body1.style.fontSize = fontSize + 'px';


    if (fontSize == 32) {
      notaFonte.textContent = 'Este é o maior tamanho de texto disponível.';
      aumentaFonte.classList.add('disabled');
      diminuiFonte.classList.remove('disabled');
      resetaFonte.classList.remove('disabled');
    }

    else if (fontSize == 16) {
      notaFonte.textContent = 'Este é o tamanho de texto recomendado.';
      aumentaFonte.classList.remove('disabled');
      diminuiFonte.classList.remove('disabled');
      resetaFonte.classList.add('disabled');
    }

    else if (fontSize == 12) {
      notaFonte.textContent = 'Este é o menor tamanho de texto disponível.';
      aumentaFonte.classList.remove('disabled');
      diminuiFonte.classList.add('disabled');
      resetaFonte.classList.remove('disabled');
    }
    else {
      notaFonte.textContent = '';
      aumentaFonte.classList.remove('disabled');
      diminuiFonte.classList.remove('disabled');
      resetaFonte.classList.remove('disabled');
    }
    document.querySelector('#tamanho-fonte').textContent = fontSize + 'px';

  }
});
// FINAL TAMANHO DA FONTE







// INICIO ESPACO ENTRE LETRAS
document.addEventListener("DOMContentLoaded", () => {
  // Valores possíveis para o espaçamento
  const espacamentoLetras = [0, 3, 6, 9, 12, 15]; // Valores em pixels
  let indexLetras = 1; // Começa em 3px (índice 1)

  const barFillLetras = document.getElementById("barra-fill-letras");
  const percentagemLetras = document.getElementById("percentagem-letras");

  // Botões
  const btnDiminuiLetras = document.getElementById("btn-espaco-letras-diminui");
  const btnAumentaLetras = document.getElementById("btn-espaco-letras-aumenta");
  const btnPadraoLetras = document.getElementById("btn-espaco-letras-normal");

  btnDiminuiLetras.addEventListener("click", () => {
    if (indexLetras > 0) {
      indexLetras--;
      updateBarLetras();
    }
  });

  btnAumentaLetras.addEventListener("click", () => {
    if (indexLetras < espacamentoLetras.length - 1) {
      indexLetras++;
      updateBarLetras();
    }
  });

  btnPadraoLetras.addEventListener("click", () => {
    indexLetras = 1; // Volta para o valor padrão
    updateBarLetras();
  });

  function updateBarLetras() {
    const percentagemAtualLetras = espacamentoLetras[indexLetras];
    const notaLetras = document.getElementById("nota-adicional-letras");

    // Atualiza a barra e o texto de percentual
    barFillLetras.style.width = `${(indexLetras / 5 * 100)}%`; // Ajusta a largura relativa
    percentagemLetras.textContent = `${percentagemAtualLetras}%`; // Atualiza o texto do valor

    // Atualiza o espaçamento entre letras no body
    document.body.style.letterSpacing = `${percentagemAtualLetras}%`; // Aplica o espaçamento

    if (indexLetras == 0) {
      notaLetras.textContent = 'Este é o menor espaçamento entre letras disponível.';
      btnAumentaLetras.classList.remove('disabled');
      btnDiminuiLetras.classList.add('disabled');
      btnPadraoLetras.classList.remove('disabled');
    }

    else if (indexLetras == 1) {
      notaLetras.textContent = 'Este é o espaçamento entre letras recomendado.';
      btnAumentaLetras.classList.remove('disabled');
      btnDiminuiLetras.classList.remove('disabled');
      btnPadraoLetras.classList.add('disabled');
    }

    else if (indexLetras == 5) {
      notaLetras.textContent = 'Este é o maior espaçamento entre letras disponível.';
      btnAumentaLetras.classList.add('disabled');
      btnDiminuiLetras.classList.remove('disabled');
      btnPadraoLetras.classList.remove('disabled');
    }
    else {
      notaLetras.textContent = '';
      btnAumentaLetras.classList.remove('disabled');
      btnDiminuiLetras.classList.remove('disabled');
      btnPadraoLetras.classList.remove('disabled');
    }
  }
});
// FIM ESPACO ENTRE LETRAS


// INICIO ESPACO ENTRE LINHAS

document.addEventListener("DOMContentLoaded", () => {
  // Valores possíveis para o espaçamento
  const espacamentoLinhas = [150, 180, 220, 250, 280, 300]; // Valores em percentagem
  let indexLinhas = 1; // Começa em 3px (índice 1)

  const barFillLinhas = document.getElementById("barra-fill-linhas");
  const percentagemLinhas = document.getElementById("percentagem-linha");

  // Botões
  const btnDiminuiLinhas = document.getElementById("btn-espaco-linhas-diminui");
  const btnAumentaLinhas = document.getElementById("btn-espaco-linhas-aumenta");
  const btnPadraoLinhas = document.getElementById("btn-espaco-linhas-normal");

  btnDiminuiLinhas.addEventListener("click", () => {
    if (indexLinhas > 0) {
      indexLinhas--;
      updateBarLinhas();
    }
  });

  btnAumentaLinhas.addEventListener("click", () => {
    if (indexLinhas < 5) {
      indexLinhas++;
      updateBarLinhas();
    }
  });

  btnPadraoLinhas.addEventListener("click", () => {
    indexLinhas = 1; // Volta para o valor padrão
    updateBarLinhas();
  });

  function updateBarLinhas() {
    const percentagemAtualLinhas = espacamentoLinhas[indexLinhas];
    const notaLinhas = document.getElementById("nota-adicional-linhas");

    // Atualiza a barra e o texto de percentual
    barFillLinhas.style.width = `${(indexLinhas / 5 * 100)}%`; // Ajusta a largura relativa
    percentagemLinhas.textContent = `${percentagemAtualLinhas}%`; // Atualiza o texto do valor

    // Atualiza o espaçamento entre letras no body
    document.body.style.lineHeight = `${percentagemAtualLinhas}%`; // Aplica o espaçamento

    if (indexLinhas == 0) {
      notaLinhas.textContent = 'Este é o menor espaçamento entre linhas disponível.';
      btnAumentaLinhas.classList.remove('disabled');
      btnDiminuiLinhas.classList.add('disabled');
      btnPadraoLinhas.classList.remove('disabled');

    }

    else if (indexLinhas == 1) {
      notaLinhas.textContent = 'Este é o espaçamento entre linhas recomendado.';
      btnAumentaLinhas.classList.remove('disabled');
      btnDiminuiLinhas.classList.remove('disabled');
      btnPadraoLinhas.classList.add('disabled');
    }

    else if (indexLinhas == 5) {
      notaLinhas.textContent = 'Este é o maior espaçamento entre linhas disponível.';
      btnAumentaLinhas.classList.add('disabled');
      btnDiminuiLinhas.classList.remove('disabled');
      btnPadraoLinhas.classList.remove('disabled');

    }
    else {
      notaLinhas.textContent = '';
      btnAumentaLinhas.classList.remove('disabled');
      btnDiminuiLinhas.classList.remove('disabled');
      btnPadraoLinhas.classList.remove('disabled');

    }
  }
});



// INICIO TAMANHO DA FONTE
// document.addEventListener('DOMContentLoaded', () => {
// });






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
const modalContent = modalAjustes.querySelector("#modal-ajustes .container-content");
// navAjustes.addEventListener("click", function (e) {
//   e.preventDefault(),
//     modalAjustes.classList.add("show"),
//     setTimeout(() => {
//       modalAjustes.classList.add("habilitado");
//     }, 100),
//     setTimeout(() => {
//       modalLabel.focus();
//     }, 200),
//     this.classList.remove("habilitado"),
//     this.classList.add("desabilitado");
// });
navAjustes.addEventListener("click", function (e) {
  e.preventDefault();

  // Verifica se o modal está aberto (tem a classe 'show')
  if (modalAjustes.classList.contains("show")) {
    // Fecha o modal
    modalAjustes.classList.remove("habilitado");
    modalAjustes.classList.remove("show");
    // modalAjustesTexto.classList.remove("show"); //add
    this.focus();
    this.classList.remove("desabilitado");
    this.classList.add("habilitado");

    this.innerHTML = '<img src="./img/ajustes.png" alt="ícone ajustes de leitura"> <span>AJUSTES DE LEITURA</span>';
    // this.textContent = "AJUSTES DE LEITURA";

  } else {
    // Abre o modal

    modalAjustes.classList.add("show");
    modalContent.classList.add("show");

    setTimeout(() => {
      modalAjustes.classList.add("habilitado");
    }, 100);
    setTimeout(() => {
      modalLabel.focus();
    }, 200);
    this.classList.remove("habilitado");
    this.classList.add("desabilitado");

    this.innerHTML = '<img src="./img/fechar.svg" alt="ícone fechar ajustes de leitura"> <span>FECHAR AJUSTES</span>';
    // this.textContent = "FECHAR AJUSTES";
  
    const modalAjustesTexto = document.getElementById("modal-ajustes-texto");

    if (modalAjustesTexto.classList.contains("show")) {
      // Se o botão de fechar existir, adiciona o evento de fechar
      modalContent.classList.remove("show");

    }


  }
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
// const bodyPush = document.body,
//   fundoCreme = document.querySelector("#fundo-creme"),
//   fundoBranco = document.querySelector("#fundo-branco"),
//   fundoEscuro = document.querySelector("#fundo-escuro");
// fundoCreme.addEventListener("click", () => {
//   localStorage.setItem("bg", "creme"),
//     bodyPush.classList.remove("escuro", "branco"),
//     bodyPush.classList.add("creme"),
//     ativar(fundoCreme);
// }),
//   fundoBranco.addEventListener("click", () => {
//     localStorage.setItem("bg", "branco"),
//       bodyPush.classList.remove("escuro", "creme"),
//       bodyPush.classList.add("branco"),
//       ativar(fundoBranco);
//   }),
//   fundoEscuro.addEventListener("click", () => {
//     localStorage.setItem("bg", "escuro"),
//       bodyPush.classList.remove("creme", "branco"),
//       bodyPush.classList.add("escuro"),
//       ativar(fundoEscuro);
//   });
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

// modificacoes

// Abre o submodal
// function abrirAjustesdeTexto() {
//   document.getElementById('abrir-ajustes-texto').classList.add('mostrar');
//   document.getElementById('submodalOverlay').classList.add('mostrar');
//   // Verifica se o modal está aberto (tem a classe 'show')
//   if (modalAjustes.classList.contains("show")) {
//     // Fecha o modal
//     modalAjustes.classList.remove("habilitado");
//     modalAjustes.classList.remove("show");
//     this.focus();
//     this.classList.remove("desabilitado");
//     this.classList.add("habilitado");

//     this.innerHTML = '<img src="./img/ajustes.png" alt="ícone ajustes de leitura"> <span>AJUSTES DE LEITURA</span>';
//     // this.textContent = "AJUSTES DE LEITURA";

//   }
// }

// Fecha o submodal
// function fecharAjustesdeTexto() {
//   document.getElementById('abrir-ajustes-texto').classList.remove('mostrar');
//   document.getElementById('submodalOverlay').classList.remove('mostrar');
//   if (!modalAjustes.classList.contains("show")) {
//     // Abre o modal
//     modalAjustes.classList.add("show");
//     setTimeout(() => {
//       modalAjustes.classList.add("habilitado");
//     }, 100);
//     setTimeout(() => {
//       modalLabel.focus();
//     }, 200);
//     this.classList.remove("habilitado");
//     this.classList.add("desabilitado");

//     this.innerHTML = '<img src="./img/fechar.svg" alt="ícone fechar ajustes de leitura"> <span>FECHAR AJUSTES</span>';
//     // this.textContent = "FECHAR AJUSTES";
//   }
// }



