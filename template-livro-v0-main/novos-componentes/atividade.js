class atividade extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        // cria os elementos
        const atividade = document.createElement('div');
        const titulo = document.createElement('h3');
        const descricao = document.createElement('p');

        // pega o numero da atividade
        const numeroAtividade = this.getAttribute('numero-atividade');

        // junta o numero com o atividade
        titulo.textContent = `Atividade ${numeroAtividade} `;

        // pega a descricao da atividade
        descricao.textContent = this.getAttribute('texto-atividade');

        // estilo css
        const linkEstilo = document.createElement('link');
        linkEstilo.setAttribute('rel', 'stylesheet');
        linkEstilo.setAttribute('href', 'estilos/atividade.css');

        // anexa os elementos ao shadow
        shadow.appendChild(linkEstilo)
        shadow.appendChild(atividade);
        atividade.appendChild(titulo);
        atividade.appendChild(descricao);
    }
}

customElements.define('elemento-atividade', atividade);