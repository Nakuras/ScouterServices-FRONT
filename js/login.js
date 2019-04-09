var config = {
    headers: {
        "Accept": "application/json"
        , 'Content-Type': 'application/json'
    }
};

const btnLogin = document.querySelector("#btn-login");

btnLogin.addEventListener('click', function (event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    const envio = {
        "email": email,
        "senha": senha
    }

    data = JSON.stringify(envio);

if (email == "recepcao@scouter.com.br") {
    axios.post("http://scouterservices.com.br/ScouterServices/rest/auth/jwt", data, config)
        .then(function (response) {;
            localStorage.clear();
            localStorage.setItem('token', 'Bearer ' + response.data.token);
            location.href = "inicio-r.html";
        })
        .catch(function (error) {
            console.log(error.response);
            alert("Email ou Senha incorretos");
        });    
}else{
    axios.post("http://scouterservices.com.br/ScouterServices/rest/auth/jwt", data, config)
        .then(function (response) {;
            localStorage.clear();
            localStorage.setItem('token', 'Bearer ' + response.data.token);
            location.href = "inicio.html";
        })
        .catch(function (error) {
            console.log(error.response);
            alert("Email ou Senha incorretos");
        });
    }
});