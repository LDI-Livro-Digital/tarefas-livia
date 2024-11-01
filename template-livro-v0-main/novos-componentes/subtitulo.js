class subtitulo extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
    
        const subtitulo = document.createElement('h2');

        subtitulo.textContent = this.getAttribute('texto');

        // estilo css
        const linkEstilo = document.createElement('link');
        linkEstilo.setAttribute('rel', 'stylesheet');
        linkEstilo.setAttribute('href', 'estilos/subtitulo.css');

        // anexa os elementos ao shadow
        shadow.appendChild(linkEstilo);
        shadow.appendChild(subtitulo);
    }
}

customElements.define('elemento-subtitulo', subtitulo);