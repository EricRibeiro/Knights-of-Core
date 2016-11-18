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

  <!-- CSS's Links -->
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/main.css" rel="stylesheet">
    <link href="../css/read.css" rel="stylesheet">
    <link href="../css/font-awesome.min.css" rel="stylesheet">

    <!-- Javascript's Links -->
    <script src="../js/read.js"></script> 
</head>

  <body onload="lerPersonagem()">
    
    <!-- This include is responsible for the header  -->
    <?php include 'header.php'; ?>
    <div id="coreTable"></div><br />
    <div id="botao"></div><br /><br />
    <div class="container-fluid">
      <blockquote class="blockquote-reverse">   
        <p>Seu core vale tudo? Ou vale nada?</p>
        <footer>Ednaldo Pereira na famigerada <em>Revista Ednaldo Pereira</em></footer>
    </blockquote>
    </div>

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