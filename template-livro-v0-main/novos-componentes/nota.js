class nota extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        // cria os elementos
        const nota = document.createElement('div');
        const conteudo = document.createElement('p');
        const titulo = document.createElement('span');

        const texto = this.getAttribute('texto');
        titulo.textContent = this.getAttribute('titulo');

        // Adiciona o título no início do conteúdo
        conteudo.appendChild(titulo);
        conteudo.appendChild(document.createTextNode(` ${texto}`));

        // estilo css
        const linkEstilo = document.createElement('link');
        linkEstilo.setAttribute('rel', 'stylesheet');
        linkEstilo.setAttribute('href', 'estilos/nota.css');

        // anexa os elementos ao shadow
        shadow.appendChild(linkEstilo);
        shadow.appendChild(nota);
        nota.appendChild(conteudo);
    }
}

customElements.define('elemento-nota', nota);
