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

	<!-- CSS's Links -->
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/main.css" rel="stylesheet">
    <link href="../css/read.css" rel="stylesheet">
    <link href="../css/font-awesome.min.css" rel="stylesheet">

    <!-- Javascript's Links -->
    <script src="../js/read.js"></script> 
</head>

  <body>
    
    <!-- This include is responsible for the header  -->
    <?php include 'header.php'; ?>
    
    <!-- Wrap the rest of the page in a container to center all the content. -->
      <div class="container jumbotron ajust" id="coreTable">
        <!-- Js table -->
          
          <!-- Beginning of the row -->
          <div class="row" >
            
            <!-- Row's first element -->
            <div class="col-md-6">
              <figure>
                <img class="img-circle hidden-xs" src="../img/trooper.png " alt="Star Wars- Clone Trooper" width="300" height="300">
              </figure> 
            </div>

            <!-- Row's second element -->
            <div class="col-md-6">
              <blockquote class="blockquote-reverse"><p>Veja os soldados do seu core! Avalie a tripulação!<br /> Quem vale tudo?<br /> Quem vale nada? </p>
                <footer>Ednaldo Pereira</footer>
              </blockquote>

          <!-- End of the Row -->
            </div>
          </div>

        <div class="container">
          <button type="button" id="confirm" class="btn btn-primary" onclick="lerPersonagem()">Confirmar</button>
    			<button type="button" class="btn btn-primary cancelar" onclick="history.go(-1);">Cancelar</button>
        </div>
      </div>
    <div id="botao"> </div>	

    <!-- This include is responsible for the footer  -->
     <?php include 'footer.php'; ?>

        <!-- jQuery's CDN -->
    <script
        src="https://code.jquery.com/jquery-3.1.1.min.js"
        integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
        crossorigin="anonymous">
    </script>
  </body>
</html>