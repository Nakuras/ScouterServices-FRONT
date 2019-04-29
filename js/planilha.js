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
//-------------------------- Puxando chamado especifico ------------------------
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

window.onload = function () {
    var mytext = getUrlParam('email', 'Empty');
    localStorage.setItem('emailFiltrado', mytext);

    let nomeUsuario = token.nome;
    localStorage.setItem('nomeUsuarioLogado', nomeUsuario);

    let emailUsuario = token.email;
    localStorage.setItem('emailUsuarioLogado', emailUsuario);
}

var receberEmail = emailUsuarioLogado;

var pontoId = localStorage.getItem('emailFiltrado');

receberEmail = pontoId;

console.log(receberEmail);

let pontos;
let nomePonto;
let diaPonto;
let horarioPonto

const tabela = document.getElementById('tabelaPlanilha');

axios.get("http://scouterservices.com.br/ScouterServices/rest/pontos", configLocal)
    .then(function (response) {
        pontos = response.data;
        pontos.forEach(ponto => {

            nomePonto = ponto.usuario;
            diaPonto = ponto.dia;
            horarioPonto = ponto.horario;

            if(ponto.usuario == receberEmail){

            let tr = document.createElement('tr');
            tabela.appendChild(tr);

            //------------- nome --------------------------

            let tdNome = document.createElement('td');
            tr.appendChild(tdNome);

            let nomeTexto = document.createElement('p');
            nomeTexto.setAttribute('class', 'tituloNegrito');
            nomeTexto.textContent = ponto.usuario;
            tdNome.appendChild(nomeTexto);

            //------------- dia --------------------------

            let tdDia = document.createElement('td');
            tr.appendChild(tdDia);

            let diaTexto = document.createElement('p');
            diaTexto.setAttribute('class', 'tituloNegrito');
            diaTexto.textContent = ponto.dia;
            tdDia.appendChild(diaTexto);

            // -------------- horario ------------------------

            let tdHorario = document.createElement('td');
            tr.appendChild(tdHorario);

            let horarioTexto = document.createElement('p');
            horarioTexto.setAttribute('class', 'tituloNegrito');
            horarioTexto.textContent = ponto.horario;
            tdHorario.appendChild(horarioTexto);

        }else{
            return null;
        }

            console.log(ponto);
            
        });
    })
    .catch(function (error) {
        console.log(error.response);
    });