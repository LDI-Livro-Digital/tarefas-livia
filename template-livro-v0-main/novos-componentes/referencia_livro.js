class referencia_livro extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        // cria os elementos
        const referencia = document.createElement('p');

        const autores = this.getAttribute('autores');
        const titulo = this.getAttribute('titulo-livro');
        const edicao = this.getAttribute('edicao');
        const local = this.getAttribute('local-de-publicacao');
        const editora = this.getAttribute('editora');
        const ano = this.getAttribute('ano-publicacao');
    
        referencia.innerHTML = `${autores} <strong>${titulo}.</strong> Ed. ${editora}, ${edicao}ª edição, ${local}, ${ano}.`;
    
        // estilo css
        const linkEstilo = document.createElement('link');
        linkEstilo.setAttribute('rel', 'stylesheet');
        linkEstilo.setAttribute('href', 'estilos/referencia.css');

        // anexa os elementos ao shadow
        shadow.appendChild(linkEstilo);
        shadow.appendChild(referencia);
    }
}

customElements.define('referencia-livro', referencia_livro);