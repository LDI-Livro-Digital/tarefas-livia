// Cookies LGPD
function cookies() {
  const conteiner = document.querySelector('.lgpd_conteiner');
  const salvar = document.querySelector('.config.salvar');

  if (!conteiner || !salvar) return null;

  const prefLocal = window.localStorage.getItem('config-preferencias');
  
  if (prefLocal) ativarFuncoes();

  function ativarFuncoes() {
    scripts();

    conteiner.classList.add('salvo');
    setTimeout(() => {
      conteiner.style.display = 'none';
    }, 500);

    window.localStorage.setItem('config-preferencias', 'aceito');
  }

  salvar.addEventListener('click', ativarFuncoes);
}

function scripts() {

    // Google
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'G-JF34Z29P5S');

}

cookies();