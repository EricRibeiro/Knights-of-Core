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
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/main.css" rel="stylesheet">
    <link href="../css/create.css" rel="stylesheet">
    <link href="../css/font-awesome.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,400i" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"> 
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300i" rel="stylesheet"> 

    <!-- Javascript's Links -->
    <script src="../js/create.js"></script> 
</head>

  <body>
    
    <!-- This include is responsible for the header  -->
    <?php include 'header.php'; ?>
    
    <!-- Marketing messaging and featurettes
    ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->

    <div class="container marketing jumbotron">
    <img class="img-rounded" src="../img/teny.png" alt="Star Wars - The Old Republic 1" width="330" height="450">	
    	<div id="formulario" class="form-group container">
    		<label for="name">Nome do Personagem:</label>
  			<input type="text" class="form-control" id="nome">

  			<label for="class">Classe do Personagem:</label>
  			<input type="text" class="form-control" id="classe">

  			<label for="role">Role do Personagem:</label>
  			<input type="text" class="form-control" id="role">

  			<label for="spec">Especialização do Personagem:</label>
  			<input type="text" class="form-control" id="especializacao">

  			<label for="item">Nível dos Itens:</label>
  			<input type="text" class="form-control" id="item_level">

  			<button type="button" class="btn btn-primary" onclick="history.go(-1);">Cancelar</button>		

  			<button type="button" class="btn btn-primary confirmar" onclick="CriarPersonagem()">Confirmar</button>
  		</div>
    </div> <!-- /.container marketing -->
  </body>
</html>