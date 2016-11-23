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
    <title>Cidônya</title>

    <!-- CSS's links -->
      <link href="assets/css/bootstrap.min.css" rel="stylesheet">
      <link href="assets/css/main.css" rel="stylesheet">
      <link href="assets/css/font-awesome.min.css" rel="stylesheet">
      <link href="assets/css/login.css" rel="stylesheet">

      <!-- Javascript's Links -->
      <script src="assets/js/login.js"></script> 
  </head>

  <body>
    <!-- This include is responsible for the header  -->
    <?php include 'assets/php/header.php'; ?>
    
    <!-- Wrap the rest of the page in a container to center all the content. -->
    <div class="container jumbotron">
      <div class="row row-centered">
        <div class="col-lg-6 col-centered">
          <div id="formulario" class="form-group container">
           <label for="name">Login</label>
  		     <input type="text" class="form-control" id="login" placeholder="Usuário">
  		     <label for="class">Senha</label>
  		     <input type="password" class="form-control" id="pw" placeholder="Senha">
  		     <button type="button" class="btn btn-primary confirmar" onclick="validator()">Entrar</button>
          </div>
        </div> 
      </div>
    </div> <!-- /.container -->
  <?php include 'assets/php/footer.php'; ?>
  </body>
</html>