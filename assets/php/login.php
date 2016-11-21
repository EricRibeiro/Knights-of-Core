<!DOCTYPE html>
<html>
  <head>
  	<meta charset="utf-8">
  	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Core">
    <meta name="author" content="Trio de Quatro">
    <link rel="icon" href="">
  	
    <!-- Page's title -->
    <title>Core</title>

  	<!-- CSS's Links -->
      <link href="../css/bootstrap.min.css" rel="stylesheet">
      <link href="../css/main.css" rel="stylesheet">
      <link href="../css/login.css" rel="stylesheet">
      <link href="../css/font-awesome.min.css" rel="stylesheet">

      <!-- Javascript's Links -->
      <script src="../js/login.js"></script> 
  </head>

  <body>
    <!-- This include is responsible for the header  -->
    <?php include 'header.php'; ?>
    
    <!-- Wrap the rest of the page in a container to center all the content. -->
    <div class="container jumbotron">
      <div id="formulario" class="form-group container">
    	  <label for="name">Login</label>
  			<input type="text" class="form-control" id="login" placeholder="Usuário">

  			<label for="class">Senha</label>
  			<input type="password" class="form-control" id="pw" placeholder="Senha">

  			<button type="button" class="btn btn-primary confirmar" onclick="validator()">Entrar</button>

  		</div>
    </div> <!-- /.container -->
  <?php include 'footer.php'; ?>
  </body>
</html>