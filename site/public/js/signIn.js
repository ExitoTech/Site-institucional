function validar(){
    email = document.getElementById('inputEmail').value;
    senha = document.getElementById('inputSenha').value;

    if(email == ""){
        inputEmail.style.border = "2px solid red";
        inputEmail.style.borderRadius = "5px";
        inputSenha.style.border = "";
        inputSenha.style.borderRadius = "";
    }else if(senha == ""){
        inputSenha.style.border = "2px solid red";
        inputSenha.style.borderRadius = "5px";
        inputEmail.style.border = "";
        inputEmail.style.borderRadius = "";
    }else{
        entrar();
    }
}

function entrar() {
    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            emailServer: document.getElementById('inputEmail').value ,
            senhaServer: document.getElementById('inputSenha').value,
        }),
    })
        .then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!");

            if (resposta.ok) {
                inputEmail.style.border = "";
                inputEmail.style.borderRadius = "";
                inputSenha.style.border = "";
                inputSenha.style.borderRadius = "";
                console.log(resposta);

                resposta.json().then((json) => {
                    console.log(json);
                    console.log(JSON.stringify(json) + 'exibindo json stringfy');

                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nomeFuncionario;
                    sessionStorage.SENHA_USUARIO = json.senha;
                    sessionStorage.FK_EMPRESA = json.fk_Empresa;
                    sessionStorage.IMG_USER = json.fotoPerfil;
                    sessionStorage.ID_USUARIO = json.idFuncionario;
                    sessionStorage.VISUALIZAR_RAM = json.visualizarRam
                    sessionStorage.VISUALIZAR_DISCO = json.visualizarDisco
                    sessionStorage.VISUALIZAR_CPU = json.visualizarCpu
                    Swal.fire({
                        title: `Entrando..`,
                        toast: true,
                        showConfirmButton: false
                    })
                    setTimeout(function () {
                        window.location = "home.html";
                    }, 2000);
                });
            } else {
                console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then((texto) => {
                    console.error(texto);
                });
            }
        })
        .catch(function (erro) {
            console.log(erro);
        });
}

function entrarDivA(){
    textoLink.innerHTML= `< voltar`
    
}

function sairDivA(){
    textoLink.innerHTML= 'ExitoTech'
}

function validEmail(){
    var email = document.getElementById('inputEmail');
    if (email.value.length > 5 && email.value.indexOf('@') > -1 && email.value.indexOf(".") > -1) {
        spanEmailLogin.innerHTML = "Ok";
        spanEmailLogin.style.color = "#80b918";
    } else {
        spanEmailLogin.innerHTML = "O email deve conter @";
        spanEmailLogin.style.color = "#d90429";
    }
}

function validSenha(){
    var senha = document.getElementById('inputSenha');
    if(senha.value.length >= 8){
        spanSenhaLogin.innerHTML = "Ok";
        spanSenhaLogin.style.color = "#80b918";
    }else{
        spanSenhaLogin.innerHTML = "A senha deve conter no mínimo 8 dígitos";
        spanSenhaLogin.style.color = "#d90429";
    }
}

function validarSessao() {

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var idUsuario = sessionStorage.ID_USUARIO;
    var fkEmpresa = sessionStorage.FK_EMPRESA;

    var h1LoginUsuario = document.getElementById("h1_login_usuario");

    if (email != null && fkEmpresa != null) {
        if (h1LoginUsuario != undefined) {
            h1LoginUsuario.innerHTML = email;
        }
        
        if(window.location.href.split('/')[3] == "home.html"){
            NomeUser.innerHTML = nome;
        }
    } else {
        window.location = "./login.html";
    }

    var senha = sessionStorage.SENHA_USUARIO;
}

/* function exibirInfosUser() {
    var nome = sessionStorage.NOME_USUARIO;
    NomeUser.innerHTML = nome;

    var senha = sessionStorage.SENHA_USUARIO;

} */

function exit(){
    var divSair = document.getElementsByClassName("opcaoNavBar exit")[0]
    divSair.style.cursor = "pointer"
    divSair.onclick = function(){
        sessionStorage.clear()
        window.location = "index.html"
    }
    
}