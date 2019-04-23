var config = {
    headers: {
        "Accept": "application/json"
        , 'Content-Type': 'application/json'
    }
};

    var ponto = new Date();

    var h = ponto.getHours();
    var m = ponto.getMinutes();
    var s = ponto.getSeconds();

    var tempo = h + '-' + m + '-' + s;
    console.log(tempo);


const btnLogin = document.querySelector("#btn-login");

btnLogin.addEventListener('click', function (event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    const envio = {
        "email": email,
        "senha": senha
    }

    var ponto = new Date();
            
    var diaDoMes = ponto.getDate();
    if (diaDoMes < 10) {
        var diaDoMesTrue = '0' + diaDoMes;
    }else {
        var diaDoMesTrue = diaDoMes;
    }

    var h = ponto.getHours();
    var m = ponto.getMinutes();
    var s = ponto.getSeconds();

    var tempo = h + '-' + m + '-' + s;
    console.log(tempo);

    var mes = ponto.getMonth();
    var ano4 = ponto.getFullYear();

    var str_data = diaDoMesTrue + '/' +(mes+1) + '/' + ano4;

    const dataPonto = {
        "dia": str_data,
        "horario": tempo,
        "usuario": email
    }


    data = JSON.stringify(envio);

    axios.post("http://scouterservices.com.br/ScouterServices/rest/ponto/novo", dataPonto, config)
        .then(function (response) {;
            localStorage.clear();
            localStorage.setItem();
        })
        .catch(function (error) {
            console.log(error.response);
        })

if (email == "recepcao@scouter.com.br" || email == "recepcao@scouter.com") {
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