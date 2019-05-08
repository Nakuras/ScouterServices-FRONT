var nomeUsuarioLogado = localStorage.getItem('nomeUsuarioLogado');
var emailUsuarioLogado = localStorage.getItem('emailUsuarioLogado');
var tipoUsuarioLogado = localStorage.getItem('tipoUsuarioLogado');

//--------------------------- CONFIG DE TOKEN ---------------------------------------------------------------------

var token = parseJwt(localStorage.getItem('token'));

var configLocal = {
    headers: {
        'Authorization': token
        , 'Content-Type': 'application/json'
        , 'Accept': 'application/json'
    }
};

//-------------------------- Puxando usuario especifico ------------------------


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue) {
    var urlparameter = defaultvalue;
    if (window.location.href.indexOf(parameter) > -1) {
        urlparameter = getUrlVars()[parameter];
    }
    return urlparameter;
}

var intervalo;

var usuarioId = localStorage.getItem('idEscolha');

	var s = 5;
	var m = 0;
	var h = 0;
	intervalo = window.setInterval(function() {
		if (s == 0 && m != 0) { m--; s = 60; }
		if (m == 0 && h != 0) { h--; s = 0; m = 60; }
		if (h < 10) {document.getElementById("hora").innerHTML = "0" + h + "h"}else {document.getElementById("hora").innerHTML = h + "h";}
		if (s < 10) {document.getElementById("segundo").innerHTML = "0" + s + "s"}else {document.getElementById("segundo").innerHTML = s + "s";}
		if (m < 10) {document.getElementById("minuto").innerHTML = "0" + m + "m"}else {document.getElementById("minuto").innerHTML = m + "m";}		
		if (s != 0) {
			s--
		};
	},1000);

		if (s == 0 && m == 0 && h == 0) {
			window.clearInterval(intervalo);
			document.getElementById('parar').style.display = "none";
			alert("Acabou");
		}
