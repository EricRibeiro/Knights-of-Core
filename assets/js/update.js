var xmlhttp = new XMLHttpRequest();
var bookId = [];
var id;
// This one show the table
function showTable() {			
	xmlhttp.onreadystatechange = processarRequisicao;
	xmlhttp.open("GET", "http://www.smartsoft.com.br/webservice/restifydb/Employees/diw_personagem/?_expand=yes", true);
	xmlhttp.send();
}

// Main function 		
function processarRequisicao() {
	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		var a = JSON.parse (xmlhttp.responseText);
		var num = a.restify.rows.length;
		var str = "<table id ='myTable' class='container table table-hover table-condensed sith'> <thead class='tableHeader'> <th> ID </th> <th> Nome </th> <th> Classe </th> <th> Role </th> <th> Especialização </th> <th> Item level </th> <th></th> </thead>";
		for (i = 0; i < num; i++) {
			bookId[i] = a.restify.rows[i].values.id.value;
			str += '<tr>' + '<td>' + a.restify.rows[i].values.id.value + '</td>' + '<td>' + a.restify.rows[i].values.nome.value + '</td>' + '<td>' + a.restify.rows[i].values.classe.value + '</td>' + '<td>' + a.restify.rows[i].values.role.value + '</td>' + '<td>' + a.restify.rows[i].values.especializacao.value + '</td>' + '<td>' + a.restify.rows[i].values.item_level.value + '</td>' + '<td>' + '<button id="button" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#myModal" onclick="getRow(this.id)">Atualizar</button>' + '</td>' + '</tr>';
		}
		document.getElementById("coreTable").innerHTML = str;
		changeClass("coreTable","container coolTable jumbotron ");
		createButton();
		changeId();	
	}
}

// Function to get the informartion of the row
function getRow(rowId) {
	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		var userSession = JSON.parse (xmlhttp.responseText);
		var userInfo = userSession.restify.rows[rowId];
		autoFill(userInfo)
	}
	xmlhttp.open("GET", "http://www.smartsoft.com.br/webservice/restifydb/Employees/diw_personagem/?_expand=yes", true);
	xmlhttp.send();
}

// Function to fill the forms with the row information
function autoFill(userInfo){
	
	  document.getElementById("charName").value = userInfo.values.nome.value;
	  document.getElementById("charClass").value = userInfo.values.classe.value;
	  document.getElementById("charRole").value = userInfo.values.role.value;
	  document.getElementById("charSpec").value = userInfo.values.especializacao.value;
	  document.getElementById("charilvl").value = userInfo.values.item_level.value;
	  id = userInfo.values.id.value;
	  console.log(userInfo.values.nome.value)
}

function updateChar(){ 
	var nome = document.getElementById("charName").value;
	var classe = document.getElementById("charClass").value;
	var role = document.getElementById("charRole").value;
	var especializacao = document.getElementById("charSpec").value;
	var item_level = document.getElementById("charilvl").value;



	xmlhttp.open("PUT", "http://www.smartsoft.com.br/webservice/restifydb/Employees/diw_personagem/" + id, true);
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	var data = {
		"nome": nome,
		"classe": classe,
		"role": role,
		"especializacao": especializacao,
		"item_level": item_level
	}
	var dataToSend = '_data=' + JSON.stringify(data);
	xmlhttp.send(dataToSend);

   xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
            window.alert("Entrada atualizada!");
			showTable();
        }	
    }
}

// Delete the Form Text
function delText(str){
	 document.getElementById(str).value= "";
}

// Change the classes of the buttons to make the transition smoother
function changeClass (x,y) {
	document.getElementById(x).className = y;
}

// Back's button function
function createButton () {
	var a = '<button type="button" class="btn btn-primary cancelar" onclick="history.go(-1);">Voltar</button>';
	document.getElementById("botao").innerHTML= a;
	changeClass("botao","botao");	
}
	
// Change the ID of the buttons
function changeId () {
	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		var rowLength = bookId.length;
	
	for (j = 0; j < rowLength; j++) {
		document.getElementsByTagName("button")[j].id = j;
	}
}
}