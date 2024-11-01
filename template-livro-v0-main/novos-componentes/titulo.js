class titulo extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: 'open'});

        // cria os elementos
        const titulo = document.createElement('h2');
        titulo.textContent = this.getAttribute('texto');

        // estilo css
        const linkEstilo = document.createElement('link');
        linkEstilo.setAttribute('rel', 'stylesheet');
        linkEstilo.setAttribute('href', 'estilos/titulo.css');

        // anexa os elementos ao shadow
        shadow.appendChild(linkEstilo);
        shadow.appendChild(titulo);
    }
}

customElements.define('elemento-titulo', titulo);