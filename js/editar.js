//--------------------------- COMPONENTE PARA IDENTIFICAR O USUARIO NA PARTE DE CIMA ------------------------------

var nomeUsuarioLogado = localStorage.getItem('nomeUsuarioLogado');
var emailUsuarioLogado = localStorage.getItem('emailUsuarioLogado');

//--------------------------- CONFIG DE TOKEN ---------------------------------------------------------------------
var tokenLocal = parseJwt(localStorage.getItem('token'));

var configLocal = {
    headers: {
        'Authorization': tokenLocal
        , 'Content-Type': 'application/json'
        , 'Accept': 'application/json'
    }
};

var usuarioId = localStorage.getItem('idUsuario');

console.log(usuarioId);

    axios.get("http://scouterservices.com.br/ScouterServices/rest/usuario/" + usuarioId, configLocal)
        .then(function (response) {

            var usuario = response.data;

            nome = usuario.nome;
            email = usuario.email;
            numero = usuario.numero;
            senha = usuario.senha;
            tipo = usuario.tipo;

        });

//--------------------------- CRIAR UMA NOVA PENDENCIA ---------------------------------------------------------------
const btnCadastrarpendencia = document.querySelector("#btnEditar");
btnCadastrarpendencia.addEventListener('click', function (event) {
    event.preventDefault();

    var nome = document.getElementById('nomeUsuario').value;
    var email = document.getElementById('emailUsuario').value;
    var telefone = document.getElementById('telefoneUsuario').value;
    var senha = document.getElementById('senha').value;
    var tipo = document.getElementById('tipoUsuario').value;

    const envio =
    {
        "nome": nome,
        "email": email,
        "numero": telefone,
        "senha": senha,
        "tipo": tipo
    }

    data = JSON.stringify(envio);

    axios.put("http://scouterservices.com.br/ScouterServices/rest/usuario/alterar/" + usuarioId, data, configLocal)
        .then(function (response) {
            location.href = "adminstrador.html";
        })
        .catch(function (error) {
            console.log(error);
        });

});