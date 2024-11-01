<!-- Insira as informações do Livro aqui -->
<?php 
$tituloLivro = "Química Ambiental"; 
$autorLivro = "Nome do Autor";
?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo $tituloLivro; ?> - <?php echo $capitulo; ?></title>

  <?php include 'components/preload.php' ?>

  <link rel="stylesheet" href="css/page.min.css">
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

  <!-- webapp -->
  <meta name="theme-color" content="#fff" />
  <!-- <link rel="manifest" crossorigin="use-credentials" href="manifest.json"> -->
  <link rel="apple-touch-icon" href="img/icon-192.png">

  <?php include 'components/script-clarity.php' ?>
</head>

<body id="topo">
  <a href="#main" id="ir-para-conteudo" class="navegacao-teclado" title="Ir para conteúdo">Ir para conteúdo</a>

  <nav class="navbar">
    <div class="container">
      <button id="nav-menu" data-modal="#menu" class="btn-terciary"><span>Menu</span></button>

      <div class="nav-title">
        <a id="link-inicio" href="index.php" title="Voltar para página inicial"><span>Ir para início</span></a>
        <?php $length = strlen($capitulo);
        if ($length >= 1) {
          echo $capitulo;
        } else {
          echo $titulo;
        } ?>
      </div>
      <button id="nav-ajustes" class="btn-terciary" data-modal="#modal-ajustes"><span>Ajustes de leitura</span></button>
      <a class="nav-logo" href="https://sead.ufes.br/" target="_blank" title="Abrir site da Sead em nova aba">
        <span>Sead</span>
        <?php include('svg/sead.svg'); ?>
      </a>
    </div>

    <div class="content-bar"></div>
  </nav>

  <?php include 'components/modal.php' ?>

  <main class="page">
    <header>
      <div class="container">
        <?php
        $length = strlen($abertura);
        if ($length >= 1) {
          echo (' <div class="cover-img" style="background-image: url' . $abertura . ' "></div> ');
        } ?>
      </div>
    </header>

    <aside id="menu">
      <div class="wrapper">

        <div>
          <a id="voltar-inicio" href="index.php" title="Voltar para página inicial">Início</a>
          <button id="menu-close"><span>Recolher menu</span></button>
        </div>

        <div id="barra-de-busca"></div>
        <p id="erro">Erro: digite, no mínimo, três caracteres para fazer a pesquisa.</p>

        <span>Sumário</span>
        <?php include 'components/sumario.php' ?>

      </div>
    </aside>

    <div class="container container-content">
      <article>
        <h1>
          <?php $length = strlen($capitulo);
          if ($length >= 1) {
            echo ('<span>' . $capitulo . ' </span>');
          }
          echo $titulo; ?>
        </h1>