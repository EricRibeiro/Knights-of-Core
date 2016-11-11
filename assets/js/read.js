			var xmlhttp = new XMLHttpRequest();
		
		function processarRequisicao() {
			if (xmlhttp.readyState==4 && xmlhttp.status==200) {
				var a = JSON.parse (xmlhttp.responseText);
				var num = a.restify.rows.length;
				var str = "<table class='container table sith table-hover table-condensed table-bordered'> <thead class='tableHeader'> <th> Id </th> <th> Nome </th> <th> Classe </th> <th> Role </th> <th> Especialização </th> <th> Item level </th> </thead>";
				for (j = 0; j < num; j++) {
					str = str + '<tbody>' +'<tr>' + '<td>' + a.restify.rows[j].values.id.value + '</td>' + '<td>' + a.restify.rows[j].values.nome.value + '</td>' + '<td>' + a.restify.rows[j].values.classe.value + '</td>' + '<td>' + a.restify.rows[j].values.role.value + '</td>' + '<td>' + a.restify.rows[j].values.especializacao.value + '</td>' + '<td>' + a.restify.rows[j].values.item_level.value + '</td>' + '</tr>' +'</tbody>' ;
				}
				document.getElementById("coreTable").innerHTML = str;
				troca_classe("coreTable","container coolTable jumbotron ");
				cria_botao();
			}
		}
		
		function lerPersonagem() {			
			xmlhttp.onreadystatechange = processarRequisicao;
			xmlhttp.open("GET", "http://www.smartsoft.com.br/webservice/restifydb/Employees/diw_personagem/?_expand=yes", true);
			xmlhttp.send();
		}

		function cria_botao (){
			var a = '<button type="button" class="btn btn-primary cancelar" onclick="history.go(-1);">Voltar</button>';
			document.getElementById("botao").innerHTML= a;
			troca_classe("botao","botao");	
		}
	
		function troca_classe (x,y){
		document.getElementById(x).className = y;
		}