//--------------------------- COMPONENTE PARA IDENTIFICAR O USUARIO NA PARTE DE CIMA ------------------------------

var nomeUsuarioLogado = localStorage.getItem('nomeUsuarioLogado');
var emailUsuarioLogado = localStorage.getItem('emailUsuarioLogado');
var tipoUsuarioLogado = localStorage.getItem('tipoUsuarioLogado');

//--------------------------- CONFIG DE TOKEN ---------------------------------------------------------------------
var tokenLocal = parseJwt(localStorage.getItem('token'));

var configLocal = {
    headers: {
        'Authorization': tokenLocal
        , 'Content-Type': 'application/json'
        , 'Accept': 'application/json'
    }
};

//--------------------------- CRIAR UMA NOVA PENDENCIA ---------------------------------------------------------------
const btnCadastrarpendencia = document.querySelector("#btnCriarPendencia");
btnCadastrarpendencia.addEventListener('click', function (event) {
    event.preventDefault();

    var nome = document.getElementById('nomeCliente').value;
    var idade = document.getElementById('idade').value;
    var sexo = document.getElementById('sexo').value;
    var link = document.getElementById('linkDoInstagram').value;
    var telefone = document.getElementById('telefone').value;
    var whatsApp = document.getElementById('whatsApp').value;
    var responsavel = document.getElementById('responsavel').value;
    var dia = document.getElementById('dataCadastro').value;
    var horario = document.getElementById('horario').value;

    const data =
    {
        "status": "PENDENTE",
        "usuario": emailUsuarioLogado, 
        "nome": nome,
        "idade": idade,
        "sexo": sexo,
        "linkDeInstagram": link,
        "telefone": telefone,
        "whatsApp": whatsApp,
        "responsavel": responsavel,
        "dia": dia,
        "horario": horario
    }

    axios.post("http://scouterservices.com.br/ScouterServices/rest/cliente/novo", JSON.stringify(data), configLocal)
        .then(function (response) {
            location.href = "inicio.html";
        })
        .catch(function (error) {
            console.log(error);
        });

});