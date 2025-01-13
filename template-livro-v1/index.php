<!-- Insira as informações do Livro aqui -->
<?php
$anoLivro = "2024";
$tituloLivro = "Química Ambiental";
$autorLivro = "Nome do Autor";
echo '<script defer type="module" src="scripts/modulo.js"></script>';
?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title><?php echo $tituloLivro; ?></title>
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

  <?php include 'components/preload.php' ?>

  <link rel="stylesheet" href="css/index.min.css">

  <meta name="theme-color" content="#fff" />
  <!-- <link rel="manifest" crossorigin="use-credentials" href="manifest.json"> -->
  <link rel="apple-touch-icon" href="img/icon-192.png">

  <?php include 'components/script-clarity.php' ?>

  <!-- header livia (fonte)-->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
  <!-- header livia (fonte) -->
</head>

<body id="index">
  <a href="#cover" id="ir-para-conteudo" title="Pular para o conteúdo" class="navegacao-teclado">Pular para o conteúdo</a>
  <nav class="navbar">
    <div class="container">
      <div class="nav-title"><span>LIVRO DIGITAL</span><?php echo $tituloLivro; ?></div> 

      <!-- <a id="voltar-inicio" href="index.php" title="Voltar para página inicial"><button></a> -->
        <a href="index.php" id="voltar-inicio" class="btn-terciary btn-inicio-index" title="Voltar para página inicial">
          <img src='img/inicio.png'>
        </a>


        <div id="barra-de-busca"></div>
        <!-- <p id="erro">Erro: digite, no mínimo, três caracteres para fazer a pesquisa.</p> ver oq fazer com isso aqui-->

        <button class="btn-terciary" id="nav-ajustes" data-modal="#modal-ajustes">
        <img src="img/ajustes.png" alt="icone"/>
          
        <span>Ajustes de leitura</span></button>
        <!-- <a class="nav-logo" href="https://sead.ufes.br/" target="_blank" title="Abrir site da Sead em nova aba"> -->
          <!-- <span>Sead</span><?php include('svg/sead.svg'); ?> -->

    </div>
  </nav>

  <?php include 'components/modal.php' ?>

  <main>
    <section id="cover">
      <div class="container">
        <div class="cover-img"></div>
        <header class="cover-header">

          <span>Livro Digital</span>
          <span><?php echo $anoLivro; ?></span>
          <h1 class="cover-title"><?php echo $tituloLivro; ?></h1>
          <p class="cover-author"><?php echo $autorLivro; ?></p>

          <p class="cover-info">Essa página é um livro digital publicado pela Superintendência de Educação à Distância, com conteúdo produzido e revisado pelos professores associados à Universidade Federal do Espírito Santo. Aproveite!</p>

          <a class="btn-primary" id="iniciar-leitura" href="introducao.php">Iniciar leitura</a>
        </header>
      </div>
    </section>

    <section id="info">
      <div class="container container-content">
        <!-- <h2>Como usar esse livro?</h2> -->
        <elemento-titulo
        texto="Como usar esse livro?"></elemento-titulo>

        <!-- <div class="info-item">
          <p class="info-text">Disponibilizamos esse livro também em um formato adequado para <strong>impressão</strong>.</p>
          <a id="link-download" class="info-btn btn-secondary" href="" target="_blank">Baixar PDF</a>
        </div> -->

        <div class="info-item" id="app-install" hidden>
          <p class="info-text">Adicione esse livro ao seu celular como um <strong>aplicativo</strong> para acessá-lo offline.</p>
          <button id="btn-app-install" class="info-btn btn-secondary">Instalar App</button>
        </div>

        <div class="info-item">
          <p class="info-text">A Sead também disponibiliza outros <strong>materiais didáticos</strong> em seu acervo digital.</p>
          <a id="link-acervo" class="info-btn btn-secondary" href="https://acervo.sead.ufes.br/" target="_blank">Visitar acervo</a>
        </div>
      </div>
    </section>


    <section id="toc">
      <div class="container container-content">
        <!-- tirando daqui -->
        

        <h2>Sumário</h2>
        <?php include 'components/sumario.php' ?>
      </div>
    </section>


    <!--<section id="authors">
      <div class="container container-content">
        <h2>Quem escreveu:</h2>

        <ul>

          <li class="author">
            <div class="author-bio">
              <h3 tabindex="0"><?php echo $autorLivro1; ?></h3>
              <p>[Texto] Descrição do autor do Livro</p><br>
              <h3 tabindex="0"><?php echo $autorLivro2; ?></h3>
              <p>[Texto] Descrição do autor do Livro</p><br>
              <h3 tabindex="0"><?php echo $autorLivro3; ?></h3>
              <p>[Texto] Descrição do autor do Livro</p>

              <div class="author-links">
                <a href="http://lattes.cnpq.br/" class="link-lattes" rel="noreferrer" target="_blank"><span>Currículo Lattes</span></a>
                <a href="https://ldi.ufes.br/" target="_blank"><span>Laboratório de Design Instrucional - Sead-Ufes</span></a>
              </div>
            </div>
          </li>


        </ul>
      </div>
    </section>-->

    <?php include 'ficha-catalografica.php'; ?>

    <section id="credits">
      <div class="container container-content">
        <h2>Créditos</h2>

        <div class="credits-licence">
          <img src="img/licenca.png" alt="Licença CC BY-NC-SA">
          <p>Esta licença permite que outros remixem, adaptem e criem a partir do seu trabalho para fins não comerciais, desde que atribuam o devido crédito e que licenciem as novas criações sob termos idênticos.</p>
          <p>A reprodução de imagens nesta obra tem caráter pedagógico e científico, amparada pelos limites do direito de autor, de acordo com a lei nº 9.610/1998, art. 46, III (citação em livros, jornais, revistas ou qualquer outro meio de comunicação, de passagens de qualquer obra, para fins de estudo, crítica ou polêmica, na medida justificada para o fim a atingir, indicando-se o nome do autor e a origem da obra). Toda reprodução foi realizada com amparo legal do regime geral de direito de autor no Brasil.</p>
        </div>

        <div class="credits-gov">
          <p><strong>Presidente da República</strong><br>Luiz Inácio Lula da Silva</p>
          <p><strong>Ministro da Educação</strong><br>Camilo Santana</p>
          <p><strong>Diretoria de Educação a Distância DED/CAPES/MEC</strong><br>Carlos Cézar Modernel Lenuzza</p>
        </div>

        <div class="credits-team">
          <div class="team-ufes">
            <span>Universidade Federal do Espírito Santo</span>

            <p><strong>Reitor</strong><br>Paulo Sérgio de Paula Vargas</p>
            <p><strong>Superintendente de Educação a Distância – SEAD</strong><br>Eustáquio Vinicius Ribeiro de Castro</p>

          </div>

          <div id="team-ldi">
            <span>Laboratório de Design Instrucional</span>

            <p>
              <strong>Gerência</strong><br>
              <em>Coordenação:</em><br>
              Luiza Avelar<br>
              <em>Equipe:</em><br>
              Lissandra Stéphane
            </p>

            <p>
              <strong>Diagramação</strong><br>
              Arí Souza
            </p>

            <p>
              <strong>Ilustração</strong><br>
              <em>Coordenação:</em><br>
              Arí Souza<br>
              <em>Equipe:</em><br>
              Jenifer Zamperlini<br>
              
            </p>

            <p>
              <strong>Desenvolvimento</strong><br>
              Paulo Serpa<br>
            </p>
          </div>

        </div>
      </div>
    </section>

  </main>

  <a id="voltar-topo" title="Voltar ao topo" href="#topo"><span>Voltar ao topo</span></a>

  <footer>
  <span>2023 - <?php echo date('Y'); ?> Sead Ufes. Todos os direitos reservados.</span>
    <a href="https://ldi.ufes.br/" target="_blank" title="Abrir site do LDI em nova aba">Desenvolvido por LDI</a>
  </footer>

  <?php include 'components/script-analytics.php' ?>
  <?php include 'components/lgpd-container.php'; ?>
  <script src="js/focus-visible.min.js"></script>
  <script type="text/javascript" src="js/app.js"></script>
  <script type="text/javascript" src="js/index.js"></script>

</body>

</html>