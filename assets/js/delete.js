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
			str += '<tr>' + '<td>' + a.restify.rows[i].values.id.value + '</td>' + '<td>' + a.restify.rows[i].values.nome.value + '</td>' + '<td>' + a.restify.rows[i].values.classe.value + '</td>' + '<td>' + a.restify.rows[i].values.role.value + '</td>' + '<td>' + a.restify.rows[i].values.especializacao.value + '</td>' + '<td>' + a.restify.rows[i].values.item_level.value + '</td>' + '<td>' + '<button id="button" class="btn btn-sm btn-primary" onclick="deleteChar(this.id)">Delete</button>' + '</td>' + '</tr>';
		}
		document.getElementById("coreTable").innerHTML = str;
		changeClass("coreTable","container coolTable jumbotron ");
		createButton();
		changeId();	
	}
}

// Function to delete the character
function deleteChar(buttonId) {
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {              
			window.alert("Entrada excluida!");
			showTable();
		}
	}
    xmlhttp.open("DELETE", "http://www.smartsoft.com.br/webservice/restifydb/Employees/diw_personagem/" + buttonId, true);
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xmlhttp.send();
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
	var idLength = bookId.length;
	for (j = 0; j < idLength; j++) {
		document.getElementsByTagName("button")[j].id = bookId[j];
	}
}