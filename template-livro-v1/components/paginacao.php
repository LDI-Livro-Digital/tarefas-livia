<?php
  $anterior = '';
  $proximo = '';

  $arquivo_atual = basename($_SERVER['PHP_SELF']);

  $json = file_get_contents('./capitulos.json');
  $capitulos = json_decode($json);


  foreach ($capitulos as $key => $value) {
    if ($arquivo_atual == $value->arquivo) {
      $anterior = (isset($capitulos[$key - 1]) ? $capitulos[$key - 1] : NULL );
      $proximo = (isset($capitulos[$key + 1]) ? $capitulos[$key + 1] : NULL );
    }
  }

  if (isset($anterior)) {
    echo '<a class="anterior flex-item1" href="' . $anterior->arquivo . '" ><span class="pagination-chapter">' . $anterior->titulo . '</span><span class="pagination-title">' . $anterior->subtitulo . '</span></a>';
  } else {
    echo '<a></a>';
  }
?>

<div class="flex-item2">
<a class="inicio btn-primary" href="index.php"><span>Início</span></a>
</div>

<?php if (isset($proximo)) {
    echo '<a class="proximo flex-item3" href="' . $proximo->arquivo . '" ><span class="pagination-chapter">' . $proximo->titulo . '</span><span class="pagination-title">' . $proximo->subtitulo . '</span></a>';
  } else {
    echo '<a></a>';
  }
?>
