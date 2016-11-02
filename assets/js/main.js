function loadXMLDoc() {
			var xmlhttp = new XMLHttpRequest();
			var codigo = document.getElementById("cod").value;
			var departamento = document.getElementById("dep").value;
			xmlhttp.onreadystatechange=function() {
				if (xmlhttp.readyState==4) {  //&& xmlhttp.status==200) {               
					document.getElementById("secao").innerHTML = xmlhttp.responseText;
				}
			}
            xmlhttp.open("POST", "http://www.smartsoft.com.br/webservice/restifydb/Employees/diw_personagem", true);
			xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

			var dataToSend = '_data={"dept_no":  "'+ codigo + '", "dept_name":  "' + departamento + '"}';

			xmlhttp.send(dataToSend);
		}