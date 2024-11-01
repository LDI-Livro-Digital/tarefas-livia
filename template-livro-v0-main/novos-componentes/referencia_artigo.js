class referencia_artigo extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: 'open'});

        // cria os elementos
        const referencia = document.createElement('p');

        const autores = this.getAttribute('autores');
        const titulo = this.getAttribute('titulo-artigo');
        const data = this.getAttribute('ano-publicacao');
        const pagina = this.getAttribute('pagina');

        referencia.innerHTML = `${autores} <strong>${titulo}.</strong> ${data}, p. ${pagina}.`;

        // estilo css
        const linkEstilo = document.createElement('link');
        linkEstilo.setAttribute('rel', 'stylesheet');
        linkEstilo.setAttribute('href', 'estilos/referencia.css');

        // anexa os elementos ao shadow
        shadow.appendChild(linkEstilo);
        shadow.appendChild(referencia);
    }
}

customElements.define('referencia-artigo', referencia_artigo);