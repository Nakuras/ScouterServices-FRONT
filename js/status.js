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

var clienteId = localStorage.getItem('idCliente');

    axios.get("http://scouterservices.com.br/ScouterServices/rest/cliente/" + clienteId, config)
        .then(function (response) {

            var cliente = response.data;

            nome = cliente.nome;
            idade = cliente.idade;
            sexo = cliente.sexo;
            link = cliente.linkDeInstagram;
            telefone = cliente.telefone;
            whatsApp = cliente.whatsApp;
            responsavel = cliente.responsavel;
            dia = cliente.dia;
            horario = cliente.horario;

            let pNome = document.createElement('p');
            pNome.textContent = cliente.nome;
            iNome.appendChild(pNome);

            let pIdade = document.createElement('p');
            pIdade.textContent = cliente.idade;
            iIdade.appendChild(pIdade);

            let pSexo = document.createElement('p');
            pSexo.textContent = cliente.sexo;
            iSexo.appendChild(pSexo);

            let pResponsavel = document.createElement('p');
            pResponsavel.textContent = cliente.responsavel;
            iResponsavel.appendChild(pResponsavel);

        });


//--------------------------- CRIAR UMA NOVA PENDENCIA --------------------------------------------------------------
const btnCadastrarpendencia = document.querySelector("#btnCriarPendencia");
btnCadastrarpendencia.addEventListener('click', function (event) {
    event.preventDefault();

    var status = document.getElementById('status').value;

    const data =
    {
        "status": status,
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

    axios.put("http://scouterservices.com.br/ScouterServices/rest/cliente/alterar/" + clienteId, JSON.stringify(data), config)
        .then(function (response) {
            location.reload();
        })
        .catch(function (error) {
            console.log(error);
        });

});