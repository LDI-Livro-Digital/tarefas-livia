function toSearch() {
  let input;
  document
    .getElementById("barra-de-busca")
    .firstElementChild.firstElementChild.children[1].focus(),
    window.scroll(0, -100),
    btnPesquisa.classList.add("ativo");
}
const btnPesquisa = document.getElementById("btn-pesquisa");
btnPesquisa.addEventListener("click", (e) => {
  e.preventDefault(), toSearch();
}),
  setTimeout(() => {
    let busqueAgora = document.getElementById("searchText");
    busqueAgora.addEventListener("input", () => {
      0 !== busqueAgora.value.length && btnPesquisa.classList.add("ativo");
    });
  }, 500);
let erro = document.getElementById("erro"),
  BOOK = [];
const loadTexts = async () => {
    let books = [],
      files;
    try {
      const jsonFile = await fetch("./capitulos.json");
      files = await jsonFile.json();
    } catch (e) {
      return (
        (erro.innerText =
          "Erro: Desculpe, não conseguimos carregar a pesquisa. Tente novamente mais tarde."),
        erro.classList.add("ativo"),
        void console.error({
          message: "Erro ao carregar <capitulos.json>",
          error: e,
        })
      );
    }
    for (chapter of files)
      try {
        const response = await fetch(chapter.arquivo),
          text = await response.text();
        books.push({
          title: chapter.titulo,
          subtitle: chapter.subtitulo,
          file: chapter.arquivo,
          text: removeLineBreaks(await stripHTML(text)),
        });
      } catch (e) {
        console.error({
          message: "Erro ao carregar os capítulos do livro.",
          error: e,
        });
      }
    BOOK = books;
  },
  cleanTexts = async () => {
    BOOK.forEach(async (el, index) => {
      el.cleanText || (BOOK[index].cleanText = await clean(el.text));
    });
  },
  clearResult = (text) => text.split(" ").slice(1, -1).join(" "),
  replaceBrChars = async (text) =>
    text
      .replace(/[áàãâä]/giu, "a")
      .replace(/[éèêë]/giu, "e")
      .replace(/[íìîï]/giu, "i")
      .replace(/[óòõôö]/giu, "o")
      .replace(/[úùûü]/giu, "u")
      .replace(/[ç]/giu, "c"),
  removeLineBreaks = (text) => text.replace(/\n+/giu, "\n"),
  stripHTML = async (text) => {
    if (!text && "string" != typeof text) return "";
    const bodyBegin = text.indexOf("<article"),
      bodyEnd = text.indexOf("</article>");
    if (-1 === bodyBegin && -1 === bodyEnd) return "";
    const tmp = document.createElement("html");
    return (tmp.innerHTML = text.substring(bodyBegin, bodyEnd)), tmp.innerText;
  },
  clean = async (text) => {
    let a = text.toLowerCase(),
      b;
    return await replaceBrChars(a);
  },
  queryRegex = (w) => new RegExp(w, "gi"),
  search = async (searchQuery) => {
    let searchRegex = queryRegex(await clean(searchQuery)),
      totalResults = 0;
    for (chapter of BOOK) {
      const indices = [];
      let result = null;
      for (; (result = searchRegex.exec(chapter.cleanText)); ) {
        const position = result.index;
        indices.push(position),
          1 === indices.length && addSection(chapter.title),
          addResult(position, searchQuery, chapter.text),
          totalResults++;
      }
    }
    updateNumberOfResults(totalResults);
  },
  showSearchUI = () => {
    (isLoading.style.display = "none"),
      (searchArea.style.display = "block"),
      setSearchWords("...");
  },
  addResult = (position, searchQuery, text) => {
    const foundEntry = chapter.text.substring(
        position,
        position + searchQuery.length
      ),
      leadingText = chapter.text.substring(position - 55, position),
      trailingText = chapter.text.substring(
        position + searchQuery.length,
        position + searchQuery.length + 55
      ),
      resultText = clearResult(
        `${leadingText}<strong>${foundEntry}</strong>${trailingText}[...]`
      ),
      resultLink = `${chapter.file}?preambule=${chapter.text.substring(
        position - 20,
        position - 1
      )}&word=${searchQuery}`,
      item = document.createElement("li");
    (item.innerHTML = `\n    <a title="Ir para o trecho do capítulo" href="${resultLink}">[...] ${resultText} [...]</a>\n  `),
      document.getElementById("resultados").appendChild(item);
  },
  addSection = (text) => {
    const item = document.createElement("h2"),
      itemText = document.createTextNode(text);
    item.appendChild(itemText),
      document.getElementById("resultados").appendChild(item);
  },
  updateNumberOfResults = (n) => {
    if (
      ((document.getElementById("search-header").style.display = "flex"),
      (document.getElementById("n-resultados").innerText = n),
      0 == n)
    ) {
      let noResult = document.getElementById("noresult"),
        chave = document.getElementById("chave"),
        input =
          document.getElementById("barra-de-busca").firstElementChild
            .firstElementChild.children[1],
        noresultBotao = noResult.querySelector("a");
      (chave.innerText = input.value),
        (noResult.style.display = "block"),
        document.getElementById("resultados").appendChild(noResult),
        noresultBotao.addEventListener("click", (e) => {
          e.preventDefault(),
            input.focus(),
            window.scroll(0, -100),
            noresultBotao.classList.add("ativo");
        });
    }
  },
  setSearchWords = (w) => {
    document.getElementById("termo").innerHTML = w;
  },
  cleanResults = () => {
    let node = document.getElementById("resultados");
    for (; node.firstChild; ) node.removeChild(node.firstChild);
  },
  setParam = (w) => {
    let params = new URLSearchParams(window.location.search);
    params.set("query", w),
      history.pushState(
        null,
        `Pesquisa: ${w}`,
        `?query=${params.get("query")}`
      );
  },
  getParam = () => {
    let params;
    return new URLSearchParams(window.location.search).get("query");
  },
  checkParamSearch = async () => {
    const urlQuery = getParam();
    urlQuery &&
      ((document.getElementById("searchText").value = urlQuery),
      cleanResults(),
      setSearchWords(urlQuery),
      await search(urlQuery));
  },
  resultsMain = async () => {
    let timer;
    await loadTexts(),
      await cleanTexts(),
      setupEvents(),
      showSearchUI(),
      await checkParamSearch();
  };
document.addEventListener("DOMContentLoaded", async () => {
  await resultsMain();
});
let semResultado = document.getElementById("noresult"),
  botaoResultado = semResultado.querySelector("#btn-pesquisa");
setTimeout(() => {
  let busqueAgora;
  document.getElementById("searchText").addEventListener("input", () => {
    botaoResultado.classList.add("ativo");
  });
}, 500);
