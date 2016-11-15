var xmlhttp = new XMLHttpRequest();
var id=0;

// Function to delete the character
function deleteChar() {
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {              
			window.alert("Entrada excluida!");
		}
	}
    xmlhttp.open("DELETE", "http://www.smartsoft.com.br/webservice/restifydb/Employees/diw_personagem/" + id, true);
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xmlhttp.send();
}
		

// Table's function 		
function processarRequisicao() {
	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		var a = JSON.parse (xmlhttp.responseText);
		var num = a.restify.rows.length;
		var str = "<table id ='myTable' class='container table table-hover sith'> <thead class='tableHeader'> <th> ID </th> <th> Nome </th> <th> Classe </th> <th> Role </th> <th> Especialização </th> <th> Item level </th> </thead>";
		for (j = 0; j < num; j++) {
		id = a.restify.rows[j].values.id.value;
			str += '<tr>' + '<td>' + id + '</td>' + '<td>' + a.restify.rows[j].values.nome.value + '</td>' + '<td>' + a.restify.rows[j].values.classe.value + '</td>' + '<td>' + a.restify.rows[j].values.role.value + '</td>' + '<td>' + a.restify.rows[j].values.especializacao.value + '</td>' + '<td>' + a.restify.rows[j].values.item_level.value + '</td>' + '<td>' + '<button class="btn btn-primary" onclick="deleteChar()">Delete</button>' + '</td>' + '</tr>';
		}
		document.getElementById("coreTable").innerHTML = str;
		troca_classe("coreTable","container coolTable jumbotron ");
		cria_botao();
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

/*//Function to get the cell's value
  function cellValue() {
        var table = document.getElementById('myTable');
        for (var r = 0, n = table.rows.length; r < n; r++) {
            for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
                alert(table.rows[r].cells[c].innerHTML);
            }
        }
    }
*/