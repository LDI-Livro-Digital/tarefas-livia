class FiguraComLegenda extends HTMLElement {
    constructor() {
        super()
        // criando o Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' })

        // criando os elementos
        const figura = document.createElement('figure')
        const imagem = document.createElement('img')
        const legenda = document.createElement('figcaption')
        const linkFonte = document.createElement('a')
        const span = document.createElement('span')

        // configurando a imagem com validação
        const imgSrc = this.getAttribute('link-da-imagem')
        if (this.validaImagem(imgSrc)) {
            imagem.src = imgSrc
            imagem.alt = this.getAttribute('texto-alternativo-para-imagem')
        } else {
            imagem.alt = 'Imagem inválida' // Texto alternativo em caso de erro
            imagem.src = 'https://via.placeholder.com/1000x400?text=Imagem+Inválida' // Placeholder para erro
        }

        // legenda
        const numeroFigura = this.getAttribute('numero-figura')
        span.classList.add('bold')
        span.textContent = `Figura ${numeroFigura}. `
        legenda.textContent = this.getAttribute('legenda')
        legenda.prepend(span)


        legenda.appendChild(document.createTextNode(" Fonte: "))
        legenda.appendChild(linkFonte)

        // link da fonte
        const verifyLink = async () => {
            if (isValidUrl(this.getAttribute('link-da-fonte')) === false) {
                linkFonte.textContent = 'Link inválido';
                linkFonte.href = '#';
                linkFonte.alt = 'Link inválido';
            }
            else {
                linkFonte.href = this.getAttribute('link-da-fonte')
                linkFonte.classList.add('ref')
                linkFonte.target = "_blank"
                linkFonte.alt = this.getAttribute('texto-alternativo-para-fonte')
                linkFonte.textContent = this.getAttribute('texto-da-fonte')
            }
        }
        verifyLink();


        // estilo css
        const linkEstilo = document.createElement('link')
        linkEstilo.setAttribute('rel', 'stylesheet')
        linkEstilo.setAttribute('href', 'estilos/figura.css')

        shadow.appendChild(linkEstilo)
        shadow.appendChild(figura)
        figura.appendChild(imagem)
        figura.appendChild(legenda)
    }

    // função para validar se o link da imagem é um arquivo de imagem valido
    // validaImagem(url) {
    //     const pattern = /\.(jpeg|jpg|gif|png|webp|svg)$/i // Extensões de imagem permitidas
    //     const placeholders = ['placeholder', 'placehold'] // Placeholders permitidos

    //     return pattern.test(url) || placeholders.includes(url);
    // }
    validaImagem(url) {
        const pattern = /\.(jpeg|jpg|gif|png|webp|svg)$/i; // Extensões de imagem permitidas
        const placeholders = ['placeholder', 'placehold.co']; // Padrões de placeholders permitidos

        // Verifica se o URL corresponde ao padrão de imagem ou contém um placeholder permitido
        return pattern.test(url) || placeholders.some(placeholder => url.includes(placeholder));
    }

}

customElements.define('figura-com-legenda', FiguraComLegenda)

function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (error) {
        return false;
    }
} 