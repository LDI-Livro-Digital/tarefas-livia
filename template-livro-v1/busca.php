<?php
$tituloLivro = "Química Ambiental";
?>

<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo $tituloLivro; ?></title>

  <?php include 'components/preload.php' ?>
  <link rel="stylesheet" href="css/busca.min.css">

  <!-- webapp -->
  <meta name="theme-color" content="#fff" />
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  <link rel="manifest" crossorigin="use-credentials" href="manifest.json">
  <link rel="apple-touch-icon" href="img/icon-192.png">

  <?php include 'components/script-clarity.php' ?>
</head>

<body id="topo">
  <a href="#cover" id="ir-para-conteudo" title="Pular para o conteúdo" class="navegacao-teclado">Pular para o conteúdo</a>

  <nav class="navbar">
    <div class="container">
      <div class="nav-title"><a href="index.php" title="Voltar para a página inicial"><?php echo $tituloLivro; ?></a></div>

      <button id="nav-ajustes" class="btn-terciary" data-modal="#modal-ajustes"><span>Ajustes de leitura</span></button>
      <a class="nav-logo" href="https://sead.ufes.br/" target="_blank" title="Abrir site da Sead em nova aba">
        <span>Sead</span>
        <?php include('svg/sead.svg'); ?>
      </a>
    </div>
  </nav>

  <?php include 'components/modal.php' ?>

  <main id="busca">
    <div class="container container-content">

      <div id="isLoading"></div>
      <div id="searchArea" style="display:none">

        <div id="barra-de-busca"></div>
        <p id="erro"></p>

        <div id="search-header">
          <p>Resultados de busca para: <span id="termo">termo</span></p>
          <p><span id="n-resultados">n°</span> ocorrências</p>
        </div>

        <ul id="resultados">
          <li class="apaga">
            <div id="eSpesquisa">
              <?php include 'svg/empty-state.svg' ?>
              <h2>Pesquise algo no livro :)</h2>
              <a id="btn-pesquisa">Busque agora</a>
            </div>
          </li>
        </ul>
      </div>
      <li id="noresult" class="apaga">
        <div id="eSpesquisa">
          <?php include 'svg/empty-state-2.svg' ?>
          <h2>Você pesquisou por: <span id="chave"></span></h2>
          <h3>Não encontramos nada :(</h3>
          <a id="btn-pesquisa">Pesquise novamente</a>
        </div>
      </li>
    </div>
  </main>

  <a id="voltar-topo" title="Voltar ao topo" href="#topo"><span>Voltar ao topo</span></a>

  <footer>
    <span>2023 - <?php echo date('Y'); ?> Sead Ufes. Todos os direitos reservados.</span>
    <a href="https://ldi.ufes.br/" target="_blank" title="Abrir site do LDI em nova aba">Desenvolvido por LDI</a>
  </footer>

  <!-- <script src="js/focus-visible.js"></script> -->
  <?php include 'components/script-analytics.php' ?>
  <script type="text/javascript" src="js/app.min.js"></script>
  <script type="text/javascript" src="js/busca.min.js"></script>
</body>

</html>