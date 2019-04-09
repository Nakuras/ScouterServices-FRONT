var nomeUsuarioLogado = localStorage.getItem('nomeUsuarioLogado');
var emailUsuarioLogado = localStorage.getItem('emailUsuarioLogado');
var tipoUsuarioLogado = localStorage.getItem('tipoUsuarioLogado');

//voltou tudo

//--------------------------- CONFIG DE TOKEN ---------------------------------------------------------------------


var token = parseJwt(localStorage.getItem('token'));

let config = {
    headers: { 'Authorization': token.tokenBRQ }
};

var configLocal = {
    headers: {
        'Authorization': token
        , 'Content-Type': 'application/json'
        , 'Accept': 'application/json'
    }
};



//--------------------------- FAZENDO GET DE CLIENTES -----------------------------------------------------------------

let clientes;
let nomeCliente;
let statusCliente;
let diaCliente;
let horarioCliente

const tabela = document.getElementById('tabelaClientes');

axios.get("http://scouterservices.com.br/ScouterServices/rest/clientes", configLocal)
    .then(function (response) {
        clientes = response.data;
        clientes.forEach(cliente => {

            nomeCliente = cliente.nome;
            statusCliente = cliente.status;
            diaCliente = cliente.dia;
            horarioCliente = cliente.horario;

            if(cliente.usuario == emailUsuarioLogado){

            let tr = document.createElement('tr');
            tabela.appendChild(tr);

            //------------- Resumo --------------------------

            let tdNome = document.createElement('td');
            tr.appendChild(tdNome);

            let aNome = document.createElement('a');
            aNome.setAttribute('href', 'inicio.html?id=' + cliente.id);
            aNome.textContent = nomeCliente;
            tdNome.appendChild(aNome);

            //------------- Situacao --------------------------

            let tdStatus = document.createElement('td');
            tr.appendChild(tdStatus);

            let aStatus = document.createElement('a');
            aStatus.setAttribute('href', 'inicio.html?id=' + cliente.id);
            aStatus.textContent = statusCliente;
            tdStatus.appendChild(aStatus);



            //------------- Situacao --------------------------

            let tdDia = document.createElement('td');
            tr.appendChild(tdDia);

            let aDia = document.createElement('a');
            aDia.setAttribute('href', 'inicio.html?id=' + cliente.id);
            aDia.textContent = diaCliente;
            tdDia.appendChild(aDia);

            // -------------------------------------------------
            let tdHorario = document.createElement('td');
            tr.appendChild(tdHorario);

            let aHorario = document.createElement('a');
            aHorario.setAttribute('href', 'inicio.html?id=' + cliente.id);
            aHorario.textContent = horarioCliente;
            tdHorario.appendChild(aHorario);

        }else{
            return null;
        }

            console.log(cliente);
            
        });
    })
    .catch(function (error) {
        console.log(error.response);
    });

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
    var mytext = getUrlParam('id', 'Empty');
    localStorage.setItem('idCliente', mytext);

    let nomeUsuario = token.nome;
    localStorage.setItem('nomeUsuarioLogado', nomeUsuario);

    let emailUsuario = token.email;
    localStorage.setItem('emailUsuarioLogado', emailUsuario);
}

var clienteId = localStorage.getItem('idCliente');

const iNome = document.getElementById('iNome');
const iIdade = document.getElementById('iIdade');
const iSexo = document.getElementById('iSexo');
const iWhatsApp = document.getElementById('iWhatsApp')
const iTelefone = document.getElementById('iTelefone');
const iResponsavel = document.getElementById('iResponsavel');
const iDia = document.getElementById('iDia');
const iHorario = document.getElementById('iHorario');
const iUsuario = document.getElementById('iUsuario');
const iLink = document.getElementById('iLink');
const iStatus = document.getElementById('iStatus');

axios.get("http://scouterservices.com.br/ScouterServices/rest/cliente/" + clienteId, configLocal)
    .then(function (response) {

        var cliente = response.data;

        let pNome = document.createElement('p');
        pNome.textContent = cliente.nome;
        iNome.appendChild(pNome);

        let pIdade = document.createElement('p');
        pIdade.textContent = cliente.idade;
        iIdade.appendChild(pIdade);

        let pSexo = document.createElement('p');
        pSexo.textContent = cliente.sexo;
        iSexo.appendChild(pSexo);

        let pWhatsApp = document.createElement('p');
        pWhatsApp.textContent = cliente.whatsApp;
        iWhatsApp.appendChild(pWhatsApp);

        let pTelefone = document.createElement('p');
        pTelefone.textContent = cliente.telefone;
        iTelefone.appendChild(pTelefone);

        let pResponsavel = document.createElement('p');
        pResponsavel.textContent = cliente.responsavel;
        iResponsavel.appendChild(pResponsavel);

        let pDia = document.createElement('p');
        pDia.textContent = cliente.dia;
        iDia.appendChild(pDia);

        let pHorario = document.createElement('p');
        pHorario.textContent = cliente.horario;
        iHorario.appendChild(pHorario);

        let aLink = document.createElement('a');
        aLink.setAttribute('href', 'https://www.instagram.com/' + cliente.linkDeInstagram);
        aLink.textContent = cliente.linkDeInstagram;
        iLink.appendChild(aLink);

        let aStatus = document.createElement('a');
        aStatus.setAttribute('href', 'formulario-alterador.html?id=' + cliente.id);
        aStatus.textContent = cliente.status;
        iStatus.appendChild(aStatus);

    })
    .catch(function (error) {
        console.log(error.response);
    });