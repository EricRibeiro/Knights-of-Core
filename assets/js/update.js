var xmlhttp = new XMLHttpRequest();
var bookId = [];	
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

// Function to delete the character
function getRow(rowId) {
	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		var userSession = JSON.parse (xmlhttp.responseText);
		var userInfo = userSession.restify.rows[rowId];
		updateChar(userInfo)
	}
	xmlhttp.open("GET", "http://www.smartsoft.com.br/webservice/restifydb/Employees/diw_personagem/?_expand=yes", true);
	xmlhttp.send();
}

function updateChar(userInfo){
		
	  document.getElementById("charName").value = userInfo.values.nome.value;
	  console.log(userInfo.values.nome.value)




	// var nome = document.getElementById("nome").value;
	// var classe = document.getElementById("classe").value;
	// var role = document.getElementById("role").value;
	// var especializacao = document.getElementById("especializacao").value;
	// var item_level = document.getElementById("item_level").value;



	// xmlhttp.open("POST", "http://www.smartsoft.com.br/webservice/restifydb/Employees/diw_personagem/0?_expand=yes", true);
	// xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	// var data = {
	// 	"nome": nome,
	// 	"classe": classe,
	// 	"role": role,
	// 	"especializacao": especializacao,
	// 	"item_level": item_level
	// }
	// var dataToSend = '_data=' + JSON.stringify(data);
	// xmlhttp.send(dataToSend);



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