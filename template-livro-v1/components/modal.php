
<div id="modal-ajustes" role="dialog" aria-labelledby="modal-ajustes-label" aria-modal="true">
  <!-- <div class="backdrop"></div> não está funcionando -->

  <div class="container container-content"> <!--- id="modal-ajustes-content"  -->
    <span id="modal-ajustes-label" class="modal-title" tabindex="-1">Ajustes de leitura</span>
    <ul class="modal-options">

      <!-- <li class="modal-item">
        <span class="modal-item-title">Ampliação</span>
        <p class="modal-item-info">Aumente o tamanho da fonte de acordo com sua preferência.</p>
        <div>
        <button id="btn-amplia" class="btn-terciary"><span>Ampliar conteúdo</span></button>
        <button id="btn-padrao" class="btn-terciary"><span>Desfazer Ampliação</span></button>
        <button id="btn-reduz" class="btn-terciary"><span>Reduzir conteúdo</span></button>
        </div>
      </li>

      <li class="modal-item">
        <span class="modal-item-title">Modo dislexia</span>
        <p class="modal-item-info">Ative a fonte própria para casos de dislexia, que será substituida em todo o texto.</p>
        <label class="switch" tabindex="0">
          <input type="checkbox" id="dislexia" tabindex="-1">
          <span class="slider round"></span>
        </label>
      </li>

      <li class="modal-item">
        <span class="modal-item-title">Fundo</span>
        <p class="modal-item-info">Escolha a cor de fundo de sua preferência.</p>

        <div class="modal-item-options">
          <button class="fundo ativo btn-terciary" id="fundo-branco"><span>Padrão</span></button>
          <button class="fundo btn-terciary" id="fundo-creme"><span>Creme</span></button>
          <button class="fundo btn-terciary" id="fundo-escuro"><span>Escuro</span></button>
        </div>
      </li> -->
      <li id="abrir-ajustes-texto" class="modal-item" onclick="abrirAjusteDeTexto()">
        <span class="modal-item-title"> <img class="modal-item-icone" src="./img/ajuste-texto.svg" alt="ajuste de texto" /> AJUSTE DE TEXTO</span>
        <p class="modal-item-info">Altere o tamanho e espaçamento do texto para melhorar sua leitura.</p>
        <img class="modal-item-abrir" src="./img/seta-direita.svg" alt="ver ajuste de texto"/>
      </li>

      <li id="abrir-ajustes-tema" class="modal-item" onclick="abrirAjusteDeTema()">
        <span class="modal-item-title"> <img class="modal-item-icone" src="./img/tema-leitura.svg" alt="tema de leitura" />TEMA DE LEITURA</span>
        <p class="modal-item-info">Altere o tema para mudar as cores do fundo e texto.</p>
        <img class="modal-item-abrir" src="./img/seta-direita.svg" alt="ver ajuste de texto"/>

      </li>

      <li id="abrir-ajustes-personalizacao" class="modal-item" onclick="abrirAjusteDePersonalizacao()">
        <span class="modal-item-title"><img class="modal-item-icone" src="./img/personalizar.svg" alt="personalizar leitura" />PERSONALIZAR LEITURA</span>
        <p class="modal-item-info">Opções adicionais para você.</p>
        <img class="modal-item-abrir" src="./img/seta-direita.svg" alt="ver ajuste de texto"/>


      </li>
      
    </ul>
    <!-- <button id="modal-close" class="btn-terciary"><span>Recolher opções de personalização</span></button> -->

  </div>








  <!-- inicio ajustes de texto -->
  <div id="modal-ajustes-texto" class="submodal">
  <span class="modal-title">
  <button id="submodal-retorno-ajustes-texto"></button>
  Ajuste de texto</span>

    <div class="submodal-content">
      <div class="submodal-item">
        <span class="submodal-item-titulo"> ESPAÇO ENTRE LETRAS</span>

        <div class="submodal-item-buttons">
          <button class="btn-terciary" id="btn-espaco-letras-diminui"></button>
          <button class="btn-terciary disabled" id="btn-espaco-letras-normal"></button>
          <button class="btn-terciary" id="btn-espaco-letras-aumenta"></button>
        </div>

        <div class="container-barra">

          <div class="barra">
            <div id="barra-fill-letras" class="barra-fill" ></div>
          </div>

        </div>
        <p id="nota-ajuste-letra">Você selecionou: <span id="percentagem-letras">3%</span>. <span id="nota-adicional-letras">Este é o espaçamento entre letras recomendado.</span></p>

      </div>


      <div class="submodal-item">
        <span class="submodal-item-titulo"> ESPAÇO ENTRE LINHAS</span>

        <div class="submodal-item-buttons">
        <button class="btn-terciary" id="btn-espaco-linhas-diminui"></button>
          <button class="btn-terciary disabled" id="btn-espaco-linhas-normal"></button>
          <button class="btn-terciary" id="btn-espaco-linhas-aumenta"></button>
        </div>

        <div class="container-barra">

          <div class="barra">
            <div class="barra-fill" id="barra-fill-linhas"></div>
          </div>

        </div>
        <p id="nota-ajuste-linha">Você selecionou: <span id="percentagem-linha">180%</span>. <span id="nota-adicional-linhas">Este é o espaçamento entre linhas recomendado.</span></p>

      </div>


      <div class="submodal-item">
        <span class="submodal-item-titulo"> TAMANHO DA FONTE</span>

        <div class="submodal-item-buttons">
          <button id="btn-fonte-diminui" class="btn-terciary"></button>
          <button id="btn-fonte-normal" class="btn-terciary disabled"></button>
          <button id="btn-fonte-aumenta" class="btn-terciary"></button>
        </div>

        <div class="container-barra">

          <div class="barra">
            <div id="barra-fill-fonte" class="barra-fill"></div>
          </div>

        </div>
        <p id="nota-ajuste-fonte">Você selecionou: <span id="tamanho-fonte">16px</span>. <span id="nota-adicional-fonte">Este é o tamanho de texto recomendado.</span></p>

      </div>

    </div>
  </div>
  <!-- final ajustes de texto -->

  <!-- inicio ajuste de tema -->
  <div id="modal-ajustes-tema" class="submodal">
    <span class="modal-title">
    <button id="submodal-retorno-ajustes-tema"></button>
    TEMA DE LEITURA</span>

    <div class="submodal-content">
      <div class="submodal-item">
        <span class="submodal-item-titulo"> TEMA</span>

        <div class="submodal-item-options">
          <button class=" ativo btn-terciary" id="fundo-branco"><span></span></button>
          <button class=" btn-terciary" id="fundo-escuro"><span></span></button>
          <button class=" btn-terciary" id="fundo-creme"><span></span></button>
        </div>
      </div>

      <span> Você selecionou o tema <b><span id="nota-adicional-tema">claro.</span><b></span>

    </div>

  </div>

  <!-- final ajuste de tema -->

  <!-- inicio ajuste de personalização -->

  <div id="modal-ajustes-personalizacao" class="submodal">
    <span class="modal-title">
    <button id="submodal-retorno-ajustes-personalizacao"></button>
    PERSONALIZAR LEITURA</span>

    <div class="submodal-content">
      <div class="submodal-item submodal-personalizacao">
        <span class="submodal-item-titulo"> ANIMAÇÕES E CORES</span>
        <span class="texto"> Quando ativado, <span class="texto-verde">habilita as animações e cores</span> durante a leitura.</span>
      
        <label class="switch">

            <input type="checkbox" class="checkbox" id="animação-toggle">
            <span class="switch-button"></span>
            <span class="texto-btn-personalizar"></span>
        </label>
      </div>

      <!--
      <div class="submodal-item submodal-personalizacao">
        <span class="submodal-item-titulo"> FOCO DE LEITURA</span>
        <span class="texto"> Quando ativado, sua leitura será auxiliada com <span class="texto-verde">foco por parágrafos.</span></span>
      
        <label id="last-switch" class="switch">

          <input type="checkbox" class="checkbox" id="animação-toggle">
          <span class="switch-button"></span>
          <span class="texto-btn-personalizar"></span>
        </label>
      </div>
      -->

    </div>
  </div>

  <!-- final ajuste de personalização -->

</div>








</div>

