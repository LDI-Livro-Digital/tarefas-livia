document.addEventListener("DOMContentLoaded", () => {
  const sumario = document.querySelector(".sumario");
  sumario.classList.add("js");
});
const tocContainer = document.querySelector("#toc .container"),
  tocSumario = tocContainer.querySelector(".sumario"),
  botaoExpandir = document.createElement("button"),
  interTitulos = document.querySelectorAll(".intertitulos");
let deferredPrompt;
(botaoExpandir.innerText = "expandir sumário"),
  (botaoExpandir.id = "expandir"),
  botaoExpandir.classList.add("btn-secondary"),
  tocContainer.insertBefore(botaoExpandir, tocSumario),
  botaoExpandir.addEventListener("click", function () {
    "expandido" == interTitulos[0].classList[1]
      ? (interTitulos.forEach((intertitulo) => {
          intertitulo.classList.remove("expandido");
        }),
        setTimeout(() => {
          botaoExpandir.innerText = "expandir sumário";
        }, 150))
      : (interTitulos.forEach((intertitulo) => {
          intertitulo.classList.add("expandido");
        }),
        setTimeout(() => {
          botaoExpandir.innerText = "condensar sumário";
        }, 150));
  });
const installButton = document.getElementById("btn-app-install"),
  installDiv = document.getElementById("app-install");
function installApp() {
  deferredPrompt.prompt(),
    (installButton.disabled = !0),
    deferredPrompt.userChoice.then((choiceResult) => {
      "accepted" === choiceResult.outcome
        ? (console.log("PWA setup accepted"),
          (installDiv.style.display = "none"))
        : console.log("PWA setup rejected"),
        (installButton.disabled = !1),
        (deferredPrompt = null);
    });
}
window.addEventListener("beforeinstallprompt", (e) => {
  console.log("beforeinstallprompt fired"),
    e.preventDefault(),
    (deferredPrompt = e),
    (installDiv.hidden = !1),
    installButton.addEventListener("click", installApp);
});
