var xmlhttp = new XMLHttpRequest();
var bookId = [];
var buttonId;
// Function to delete the character
function deleteChar(btnId) {
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {              
			window.alert("Entrada excluida!");
			window.location.reload();

		}
	}
    xmlhttp.open("DELETE", "http://www.smartsoft.com.br/webservice/restifydb/Employees/diw_personagem/" + btnId, true);
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xmlhttp.send();
}
		

// Table's function 		
function processarRequisicao() {
	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		var a = JSON.parse (xmlhttp.responseText);
		var num = a.restify.rows.length;
		var str = "<table id ='myTable' class='container table table-hover sith'> <thead class='tableHeader'> <th> ID </th> <th> Nome </th> <th> Classe </th> <th> Role </th> <th> Especialização </th> <th> Item level </th> </thead>";
		for (i = 0; i < num; i++) {
			bookId[i] = a.restify.rows[i].values.id.value;
			str += '<tr>' + '<td>' + a.restify.rows[i].values.id.value + '</td>' + '<td>' + a.restify.rows[i].values.nome.value + '</td>' + '<td>' + a.restify.rows[i].values.classe.value + '</td>' + '<td>' + a.restify.rows[i].values.role.value + '</td>' + '<td>' + a.restify.rows[i].values.especializacao.value + '</td>' + '<td>' + a.restify.rows[i].values.item_level.value + '</td>' + '<td>' + '<button id="button" class="btn btn-primary" onclick="deleteChar(this.id)">Delete</button>' + '</td>' + '</tr>';
		}
		document.getElementById("coreTable").innerHTML = str;
		troca_classe("coreTable","container coolTable jumbotron ");
		cria_botao();
		var idLength = bookId.length;
		for (j = 0; j < idLength; j++) {
			document.getElementsByTagName("button")[j].id = bookId[j];
		}
	}
}

function showTable() {			
	xmlhttp.onreadystatechange = processarRequisicao;
	xmlhttp.open("GET", "http://www.smartsoft.com.br/webservice/restifydb/Employees/diw_personagem/?_expand=yes", true);
	xmlhttp.send();
}

//Back's button function
function cria_botao (){
	var a = '<button type="button" class="btn btn-primary cancelar" onclick="history.go(-1);">Voltar</button>';
	document.getElementById("botao").innerHTML= a;
	troca_classe("botao","botao");	
}
	
function troca_classe (x,y){
	document.getElementById(x).className = y;
}
