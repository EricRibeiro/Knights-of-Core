var xmlhttp = new XMLHttpRequest();

	function processarRequisicao() {
			if (xmlhttp.readyState==4 && xmlhttp.status==200) {
				var a = JSON.parse (xmlhttp.responseText);
				var num = a.restify.rows.length;
				var login = document.getElementById("login").value;
				var senha = document.getElementById("pw").value;
				for (j = 0; j < num; j++) {
					if(login == a.restify.rows[j].values.login.value && senha == a.restify.rows[j].values.senha.value){
						alert("Login feito com sucesso!");
						location.href = "assets/php/menu.php"
					}
					else{
						alert("Login inválido! tente novamente!");
					}
				}
			}
		}
		
		function validator() {			
			xmlhttp.onreadystatechange = processarRequisicao;
			xmlhttp.open("GET", "http://www.smartsoft.com.br/webservice/restifydb/Employees/diw_seguranca/?_expand=yes", true);
			xmlhttp.send();
		}