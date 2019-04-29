//--------------------------- COMPONENTE PARA IDENTIFICAR O USUARIO NA PARTE DE CIMA ------------------------------

var nomeUsuarioLogado = localStorage.getItem('nomeUsuarioLogado');
var emailUsuarioLogado = localStorage.getItem('emailUsuarioLogado');
var tipoUsuarioLogado = localStorage.getItem('tipoUsuarioLogado');

//--------------------------- CONFIG DE TOKEN ---------------------------------------------------------------------
var token = parseJwt(localStorage.getItem('token'));

var config = {
    headers: {
        'Authorization': token
        , 'Content-Type': 'application/json'
        , 'Accept': 'application/json'
    }
};

let nomeUsuario = token.nome;
localStorage.setItem('nomeUsuarioLogado', nomeUsuario);

let emailUsuario = token.email;
localStorage.setItem('emailUsuarioLogado', emailUsuario);

//--------------------------- CONFIG DE TOKEN ---------------------------------------------------------------------
var tokenLocal = parseJwt(localStorage.getItem('token'));

var configLocal = {
    headers: {
        'Authorization': tokenLocal
        , 'Content-Type': 'application/json'
        , 'Accept': 'application/json'
    }
};

//--------------------------- CRIAR UM NOVO USUARIO ---------------------------------------------------------------
const btnCadastrarUsuario = document.querySelector("#btnA");
btnCadastrarUsuario.addEventListener('click', function (event) {
    event.preventDefault();

    var nome = document.getElementById('nomeCadastro').value;
    var tipoHierarquico = document.getElementById('tipoHierarquico').value;
    var numero = document.getElementById('numeroCadastro').value;
    var email = document.getElementById('emailCadastro').value;
    var senha = document.getElementById('senhaCadastro').value;

    const data =
    {
        "tipo": tipoHierarquico,
        "nome": nome,
        "email": email,
        "numero": numero,
        "senha": senha
    }

    axios.post("http://scouterservices.com.br/ScouterServices/rest/usuario/novo", JSON.stringify(data), config)
        .then(function (response) {
            console.log(response);
            location.reload();
        })
        .catch(function (error) {
            console.log(error);
        });

});

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
    localStorage.setItem('idUsuario', mytext);
}

//--------------------------- VISUALIZAR USUARIOS ------------------------------------------------------------------

let usuarios;

const usuarioGrid = document.getElementById('Usuario');

if (emailUsuarioLogado == 'adriano@scouter.com.br') {

    axios.get("http://scouterservices.com.br/ScouterServices/rest/usuarios", config)
    .then(function (response) {
        usuarios = response.data;
        usuarios.forEach(dadosDosUsuarios => {

            console.log(dadosDosUsuarios);

            let nomeLista = document.createElement('div');
            nomeLista.setAttribute('id', dadosDosUsuarios.id);
            usuarioGrid.appendChild(nomeLista);

            let nomeTitulo = document.createElement('p');
            nomeTitulo.setAttribute('class', 'tituloNegrito');
            nomeTitulo.textContent = 'Nome: ';
            nomeLista.appendChild(nomeTitulo);

            let aNome = document.createElement('a');
            aNome.setAttribute('href', 'adminstracao.html?id=' + dadosDosUsuarios.id);
            aNome.textContent = dadosDosUsuarios.nome;
            nomeLista.appendChild(aNome);

            let puloTexto = document.createElement('p');
            puloTexto.textContent = ' ';
            nomeLista.appendChild(puloTexto);

            let emailTitulo = document.createElement('p');
            emailTitulo.setAttribute('class', 'tituloNegrito');
            emailTitulo.textContent = 'Email: ';
            nomeLista.appendChild(emailTitulo);

            let emailTexto = document.createElement('p');
            emailTexto.textContent = ' ' + dadosDosUsuarios.email;
            nomeLista.appendChild(emailTexto);

            let tipoTitulo = document.createElement('p');
            tipoTitulo.setAttribute('class', 'tituloNegrito');
            tipoTitulo.textContent = 'Tipo: ';
            nomeLista.appendChild(tipoTitulo);

            let tipoTexto = document.createElement('p');
            tipoTexto.textContent = ' ' + dadosDosUsuarios.tipo;
            nomeLista.appendChild(tipoTexto);

            let botao = document.createElement('a');
            botao.setAttribute('href', 'editar.html?id=' + dadosDosUsuarios.id);
            botao.textContent = 'alterar';
            nomeLista.appendChild(botao);

            let botao2 = document.createElement('a');
            botao2.setAttribute('href', 'planilha.html?email=' + dadosDosUsuarios.email);
            botao2.textContent = 'entradas';
            nomeLista.appendChild(botao2);

            let hr = document.createElement('hr');
            nomeLista.appendChild(hr);

        });
    })
    .catch(function (error) {
        console.log(error.response);
    });

}else{

axios.get("http://scouterservices.com.br/ScouterServices/rest/usuarios", config)
    .then(function (response) {
        usuarios = response.data;
        usuarios.forEach(dadosDosUsuarios => {

            console.log(dadosDosUsuarios);

            let nomeLista = document.createElement('div');
            nomeLista.setAttribute('id', dadosDosUsuarios.id);
            usuarioGrid.appendChild(nomeLista);

            let nomeTitulo = document.createElement('p');
            nomeTitulo.setAttribute('class', 'tituloNegrito');
            nomeTitulo.textContent = 'Nome: ';
            nomeLista.appendChild(nomeTitulo);

            let nomeTexto = document.createElement('p');
            nomeTexto.textContent = ' ' + dadosDosUsuarios.nome;
            nomeLista.appendChild(nomeTexto);

            let puloTexto = document.createElement('p');
            puloTexto.textContent = ' ';
            nomeLista.appendChild(puloTexto);

            let emailTitulo = document.createElement('p');
            emailTitulo.setAttribute('class', 'tituloNegrito');
            emailTitulo.textContent = 'Email: ';
            nomeLista.appendChild(emailTitulo);

            let emailTexto = document.createElement('p');
            emailTexto.textContent = ' ' + dadosDosUsuarios.email;
            nomeLista.appendChild(emailTexto);

            let tipoTitulo = document.createElement('p');
            tipoTitulo.setAttribute('class', 'tituloNegrito');
            tipoTitulo.textContent = 'Tipo: ';
            nomeLista.appendChild(tipoTitulo);

            let tipoTexto = document.createElement('p');
            tipoTexto.textContent = ' ' + dadosDosUsuarios.tipo;
            nomeLista.appendChild(tipoTexto);

            let hr = document.createElement('hr');
            nomeLista.appendChild(hr);


        });
    })
    .catch(function (error) {
        console.log(error.response);
    });
}