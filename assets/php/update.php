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
    <script src="../js/update.js"></script> 
</head>

  <body onload="showTable()">
    
    <!-- This include is responsible for the header  -->
    <?php include 'header.php'; ?>
    <div id="coreTable"></div><br />
    <div id="botao"></div><br /><br />
    <div class="container-fluid"></div>

    <!-- This include is responsible for the footer  -->
    <?php include 'footer.php'; ?> 

  <!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title"></h4>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="name">Nome do Personagem:</label>
            <input type="text" class="form-control" id="charName" onClick = "delText(this.id);">
          </div>
          <div class="form-group">
            <label for="class">Classe:</label>
            <input type="text" class="form-control" id="charClass" onClick = "delText(this.id);">
          </div>
          <div class="form-group">
            <label for="role">Role do Personagem:</label>
            <input type="text" class="form-control" id="charRole" onClick = "delText(this.id);">
          </div>
          <div class="form-group">
            <label for="spec">Especialização do Personagem:</label>
            <input type="text" class="form-control" id="charSpec" onClick = "delText(this.id);">
          </div>
          <div class="form-group">
            <label for="itemlvl">Nível dos Itens:</label>
            <input type="text" class="form-control" id="charilvl" onClick = "delText(this.id);">
          </div>
        </form>
      </div>
      <div class="modal-footer ">
        <button type="button" class="btn btn-sm btn-primary" data-dismiss="modal" onclick = "updateChar()" >Atualizar</button>
      </div>
    </div>

  </div>
</div>


        <!-- jQuery's CDN -->
    <script
        src="https://code.jquery.com/jquery-3.1.1.min.js"
        integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
        crossorigin="anonymous">
    </script>

    <script src="../js/bootstrap.min.js"></script> 

  </body>
</html>