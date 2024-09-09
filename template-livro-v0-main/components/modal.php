<div id="modal-ajustes" role="dialog" aria-labelledby="modal-ajustes-label" aria-modal="true">
  <div class="container container-content">  
    <span id="modal-ajustes-label" class="modal-title" tabindex="-1">Ajustes de leitura</span>

    <ul class="modal-options">

      <li class="modal-item">
        <span class="modal-item-title">Ampliação</span>
        <!-- <p class="modal-item-info">Aumente o tamanho da fonte de acordo com sua preferência.</p> -->
        <div id="botoes-tamanho-texto">
          <button id="btn-reduz" class="btn-terciary"><span>Reduzir conteúdo</span></button>
          <button id="btn-padrao" class="btn-terciary"><span>Desfazer Ampliação</span></button>
          <button id="btn-amplia" class="btn-terciary"><span>Ampliar conteúdo</span></button>
        </div>

        <span id="nota-tamanho-texto" class="modal-item-info">Você selecionou: <b>16px</b>. Este é o tamanho de texto recomendado para você.</span>
        

        <div class="scale-container"> <!-- container da escala de tamanho de texto -->

          <div class="line"> <!-- linha da escala de tamanho de texto -->
            <div class="vertical-line position-0"></div> <!-- linha vertical da escala de tamanho de texto -->
            <div class="vertical-line position-1"></div>
            <div class="vertical-line position-2"></div>
            <div class="vertical-line position-3"></div>
            <div class="vertical-line position-4"></div>
            <div class="vertical-line position-5"></div>
            <div class="vertical-line position-6"></div>
            <div class="circle"></div>
          </div>
          
        </div>

      </li>

      <!-- <li id="modo-dislexia" class="modal-item"> quando eu tiro o modo dislexia, o botão para de funcionar 
        <span class="modal-item-title">Modo dislexia</span>
        <p class="modal-item-info">Ative a fonte própria para casos de dislexia, que será substituida em todo o texto.</p>
        <label class="switch" tabindex="0">
          <input type="checkbox" id="dislexia" tabindex="-1">
          <span class="slider round"></span>
        </label>
      </li> -->

      <li class="modal-item">
        <span class="modal-item-title">Fundo</span>
        <!-- <p class="modal-item-info">Escolha a cor de fundo de sua preferência.</p> -->

        <div class="modal-item-options">
          <button class="fundo ativo btn-terciary" id="fundo-branco"><span>Padrão</span></button>
          <button class="fundo btn-terciary" id="fundo-creme"><span>Creme</span></button>
          <button class="fundo btn-terciary" id="fundo-escuro"><span>Escuro</span></button>
        </div>
      </li>
      
    </ul>
    <button id="modal-close" class="btn-terciary"><span>Recolher opções de personalização</span></button>

  </div>
</div>