class referencia_site extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        // cria os elementos
        const referencia = document.createElement('p');

        const data = this.getAttribute('data-de-acesso');
        const url = this.getAttribute('link-do-site');

        referencia.textContent = `${url}. Acessado em ${data}.`;

        // estilo css
        const linkEstilo = document.createElement('link');
        linkEstilo.setAttribute('rel', 'stylesheet');
        linkEstilo.setAttribute('href', 'estilos/referencia.css');

        // anexa os elementos ao shadow
        shadow.appendChild(linkEstilo);
        shadow.appendChild(referencia);
    }
}

customElements.define('referencia-site', referencia_site);