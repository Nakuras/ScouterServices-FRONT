var nomeUsuarioLogado = localStorage.getItem('nomeUsuarioLogado');
var emailUsuarioLogado = localStorage.getItem('emailUsuarioLogado');
var tipoUsuarioLogado = localStorage.getItem('tipoUsuarioLogado');

//----------------------------------------------------

const userside = document.getElementById('userside');

let nomeExibicaoSup = document.createElement('div');
nomeExibicaoSup.setAttribute('class', 'nomet');
nomeExibicaoSup.setAttribute('id', 'nome');
nomeExibicaoSup.textContent = nomeUsuarioLogado;
userside.appendChild(nomeExibicaoSup);

const usuarioInform = document.getElementById('Usuarioinform');

let fotoUsuario = document.createElement('div');
fotoUsuario.setAttribute('class', 'usuariofotoclass');
fotoUsuario.setAttribute('id', 'usuariofoto');
usuarioInform.appendChild(fotoUsuario);

let nomeExibicao = document.createElement('div');
nomeExibicao.setAttribute('id', 'nomee');
nomeExibicao.textContent = 'Nome: ' + nomeUsuarioLogado;
usuarioInform.appendChild(nomeExibicao);

let emailExibicao = document.createElement('div');
emailExibicao.setAttribute('id', 'nomee');
emailExibicao.textContent = 'Email: ' + emailUsuarioLogado;
usuarioInform.appendChild(emailExibicao);

var userclossclass = document.getElementById('usercloss');
var usuarioinformclass = document.getElementById('Usuarioinform');
var nomee = document.getElementById('nome');

var timeChoose1 = document.createElement('a');
timeChoose1.setAttribute('href', 'cronometro.html?id=1');
timeChoose1.textContent = '30 Min';
usuarioInform.appendChild(timeChoose1);

var timeChoose2 = document.createElement('a');
timeChoose2.setAttribute('href', 'cronometro.html?id=2');
timeChoose2.textContent = '15 Min';
usuarioInform.appendChild(timeChoose2);

var timeChoose3 = document.createElement('a');
timeChoose3.setAttribute('href', 'cronometro.html?id=3');
timeChoose3.textContent = '5 Min';
usuarioInform.appendChild(timeChoose3);

function openuser() {
    document.getElementById("userside").style.height = "60%";
    userclossclass.style.display = "block";
    usuarioinformclass.style.display = "block";
    nomee.style.display = "none";

}

function closeuser() {
    document.getElementById("userside").style.height = "5%";
    userclossclass.style.display = "none";
    usuarioinformclass.style.display = "none";
    nomee.style.display = "block";

}
window.onclick = function (event) {
    if (event.target == userclossclass) {
        document.getElementById("userside").style.height = "5%";
        userclossclass.style.display = "none";
        usuarioinformclass.style.display = "none";
        nomee.style.display = "block";

    }
}