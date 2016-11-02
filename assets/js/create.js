function CriarPersonagem() {
	var xmlhttp = new XMLHttpRequest();
	var nome = document.getElementById("nome").value;
	var classe = document.getElementById("classe").value;
	var role = document.getElementById("role").value;
	var especializacao = document.getElementById("especializacao").value;
	var item_level = document.getElementById("item_level").value;
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4) {              
			document.getElementById("formulario").innerHTML = xmlhttp.responseText;
		}
	}
    xmlhttp.open("POST", "http://www.smartsoft.com.br/webservice/restifydb/Employees/diw_personagem/0?_expand=yes", true);
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
}