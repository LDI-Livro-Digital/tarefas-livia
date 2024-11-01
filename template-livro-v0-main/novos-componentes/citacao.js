class citacao extends HTMLElement {
  constructor() {
    super();
   
    const shadow = this.attachShadow({ mode: 'open' });

    // cria os elementos
    const citacao = document.createElement('p');
    const texto = this.getAttribute('texto');
    const numeroCitacao = this.getAttribute('numero-da-citacao');

    citacao.innerHTML = `"${texto}" <sup>${numeroCitacao}</sup>`;

    // estilo css
    const linkEstilo = document.createElement('link');
    linkEstilo.setAttribute('rel', 'stylesheet');
    linkEstilo.setAttribute('href', 'estilos/citacao.css');

    // anexa os elementos ao shadow
    shadow.appendChild(linkEstilo);
    shadow.appendChild(citacao);
  }
}

customElements.define('elemento-citacao', citacao);