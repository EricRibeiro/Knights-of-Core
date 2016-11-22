<!DOCTYPE html>
<html>
  
  <head>
  	<meta charset="utf-8">
  	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Core">
    <meta name="author" content="Dupla de Três">
    <link rel="icon" href="">
  	
    <!-- Page's title -->
    <title>Cidônya</title>

  	<!-- CSS's links -->
      <link href="../css/bootstrap.min.css" rel="stylesheet">
      <link href="../css/main.css" rel="stylesheet">
      <link href="../css/font-awesome.min.css" rel="stylesheet">

  </head>

  <body>
    <!-- This include is responsible for the header  -->
    <?php include 'header.php'; ?>
    
    <!-- Wrap the rest of the page in another container to center all the content. -->
    <div class="container jumbotron">

      <!-- Three columns of text below the header -->
      <div class="row">

        <div class="col-lg-3 col-xs-12">
          <figure>
            <img class="img-circle hidden-xs" src="../img/header_1_crop.png" alt="Star Wars - The Old Republic 1" width="200" height="200">
          </figure>
          <h3>Registrar a Equipe</h3>
          <p id="text">Entre aqui para registrar os jogadores que vão participar da sua core e seus respectivos atributos.</p>
          <p><a class="btn btn-info" href="create.php" role="button"> Criar &raquo;</a></p>
        </div>
     
        <div class="col-lg-3 col-xs-12">
          <figure>
            <img class="img-circle hidden-xs" src="../img/header_2_crop.png" alt="Star Wars - The Old Republic 2" width="200" height="200">
          </figure>
          <h3>Integrantes da Equipe</h3>
          <p id="text">Aqui você pode ver as informações dos participantes, como nível dos itens, classes, etc.</p>
          <p><a class="btn btn-info" href="read.php" role="button"> Ler &raquo;</a></p>
        </div>

        <div class="col-lg-3 col-xs-12">
          <figure>
            <img class="img-circle hidden-xs" src="../img/header_3_crop.png" alt="Star Wars - The Old Republic 3" width="200" height="200">
          </figure>
          <h3>Alterar os Dados</h3>
          <p id="text">Mantenha sempre o status da sua equipe atualizado entrando aqui e alterandos os dados.</p>
          <p><a class="btn btn-info" href="update.php" role="button"> Atualizar &raquo;</a></p>
        </div>

        <div class="col-lg-3 col-xs-12">
          <figure>
            <img class="img-circle hidden-xs" src="../img/header_4_crop.png" alt="Star Wars - The Old Republic 4" width="200" height="200">
          </figure>
          <h3>Apagar os Jogadores</h3>
          <p id="text">Apague dados incorretos, jogadores que sairam da equipe ou entradas inválidas aqui.</p>
          <p><a class="btn btn-info" href="delete.php" role="button"> Apagar &raquo;</a></p>
        </div>
  
      </div><!-- /.row -->
    </div> <!-- /.container marketing -->
    

    <!-- This include is responsible for the footer  -->
    <?php include '../php/footer.php'; ?>

    <!-- jQuery's CDN -->
    <script
        src="https://code.jquery.com/jquery-3.1.1.min.js"
        integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
        crossorigin="anonymous">
    </script>

  </body>
</html>