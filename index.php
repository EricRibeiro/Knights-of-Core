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
  <title>Core</title>

	<!-- CSS's Links -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/css/main.css" rel="stylesheet">
    <link href="assets/css/font-awesome.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,400i" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"> 
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300i" rel="stylesheet"> 

</head>

  <body>
    
    <!-- This include is responsible for the header  -->
    <?php include 'assets/php/header.php'; ?>
    
    <!-- Marketing messaging and featurettes
    ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->

    <div class="container marketing jumbotron">

      <!-- Three columns of text below the carousel -->
      <div class="row">
        <div class="col-lg-4">
          <img class="img-circle" src="assets/img/header_1_crop.png" alt="Star Wars - The Old Republic 1" width="200" height="200">
          <h3>Registrar a Equipe</h3>
          <p id="text">Entre aqui para registrar os jogadores que vão participar da sua core e seus respectivos atributos.</p>
          <p><a class="btn btn-info" href="assets/php/create.php" role="button"> Criar &raquo;</a></p>
        </div><!-- /.col-lg-4 -->
     
        <div class="col-lg-4">
          <img class="img-circle" src="assets/img/header_2_crop.png" alt="Star Wars - The Old Republic 2" width="200" height="200">
          <h3>Integrantes da Equipe</h3>
          <p id="text">Aqui você pode ver as informações dos participantes, como nível dos itens, classes, etc.</p>
          <p><a class="btn btn-info" href="#" role="button"> Ler &raquo;</a></p>
        </div><!-- /.col-lg-4 -->

        <div class="col-lg-4">
          <img class="img-circle" src="assets/img/header_3_crop.png" alt="Star Wars - The Old Republic 3" width="200" height="200">
          <h3>Alterar os Dados</h3>
          <p id="text">Mantenha sempre o status da sua equipe atualizado entrando aqui e alterandos os dados.</p>
          <p><a class="btn btn-info" href="#" role="button"> Atualizar &raquo;</a></p>
        </div><!-- /.col-lg-4 -->

        <div class="col-lg-4">
          <img class="img-circle" src="assets/img/header_4_crop.png" alt="Star Wars - The Old Republic 4" width="200" height="200">
          <h3>Apagar os Jogadores</h3>
          <p id="text">Apague dados incorretos, jogadores que sairam da equipe ou entradas inválidas aqui.</p>
          <p><a class="btn btn-info" href="#" role="button"> Apagar &raquo;</a></p>
        </div><!-- /.col-lg-4 -->
      </div><!-- /.row -->
    </div> <!-- /.container marketing -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  </body>
</html>