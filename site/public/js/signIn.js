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

                    // sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nomeFuncionario;
                    sessionStorage.SENHA_USUARIO = json.senha;
                    sessionStorage.FK_EMPRESA = json.fk_Empresa;
                    // sessionStorage.ID_USUARIO = json.id_usuario;
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

function exibirInfosUser() {
    var nome = sessionStorage.NOME_USUARIO;
    NomeUser.innerHTML = nome;

    var senha = sessionStorage.SENHA_USUARIO;

}

function exit(){

    var divSair = document.getElementsByClassName("opcaoNavBar exit")[0]
    divSair.style.cursor = "pointer"
    divSair.onclick = function(){
        sessionStorage.clear()
        window.location = "index.html"
    }
    
}