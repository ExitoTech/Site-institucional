function verificarEmail() {

    var testeMail = inputEmail.value


    if (testeMail.indexOf(".") > -1 && testeMail.indexOf("@") > -1) {
        inputEmail.style.color = "#80b918";
        inputEmail.style.borderLeft = "none";
        inputEmail.style.borderTop = "none";
        inputEmail.style.borderRight = "none";
    }
    else if (testeMail == '') {
        inputEmail.style.color = "#ffc300";
        inputEmail.style.borderLeft = "none";
        inputEmail.style.borderTop = "none";
        inputEmail.style.borderRight = "none";
    }

    else {
        inputEmail.style.color = "#d90429";
        inputEmail.style.border = "2px solid #000633";
        inputEmail.style.borderLeft = "none";
        inputEmail.style.borderTop = "none";
        inputEmail.style.borderRight = "none";
    }
}

function ValidaSenha() {

    var testeSenha = inputSenha.value

    if (testeSenha.length >= 8) {
        inputSenha.style.border = "2px solid green";
        inputSenha.style.borderLeft = "none";
        inputSenha.style.borderTop = "none";
        inputSenha.style.borderRight = "none";
    }
    else if (testeSenha == '') {
        inputSenha.style.border = "2px solid #b8860b";
        inputSenha.style.borderLeft = "none";
        inputSenha.style.borderTop = "none";
        inputSenha.style.borderRight = "none";
    }

    else {
        inputSenha.style.border = "2px solid red";
        inputSenha.style.borderLeft = "none";
        inputSenha.style.borderTop = "none";
        inputSenha.style.borderRight = "none";
    }
}

function ValidaConfirmarSenha() {

    var testeConfirmarSenha = inputRepetirSenha.value
    var testeSenha = inputSenha.value


    if (testeConfirmarSenha == testeSenha) {
        inputRepetirSenha.style.border = "2px solid green";
        inputRepetirSenha.style.borderLeft = "none";
        inputRepetirSenha.style.borderTop = "none";
        inputRepetirSenha.style.borderRight = "none";
    }
    else if (testeConfirmarSenha == '') {
        inputRepetirSenha.style.border = "2px solid #b8860b";
        inputRepetirSenha.style.borderLeft = "none";
        inputRepetirSenha.style.borderTop = "none";
        inputRepetirSenha.style.borderRight = "none";
    }

    else {
        inputRepetirSenha.style.border = "2px solid red";
        inputRepetirSenha.style.borderLeft = "none";
        inputRepetirSenha.style.borderTop = "none";
        inputRepetirSenha.style.borderRight = "none";
    }
}



function nextSignUp() {

    var errosValidação = 0

    var inputRepetirSenha = document.getElementById("inputRepetirSenha")
    var inputSenha = document.getElementById("inputSenha")
    var inputEmail = document.getElementById("inputEmail")

    if(inputRepetirSenha.style.borderBottom != "2px solid green"){

        errosValidação++

    }
    else if(inputSenha.style.borderBottom != "2px solid green"){

        errosValidação++

    }
    else if(inputEmail.style.color != "rgb(128, 185, 24)"){

        errosValidação++
    }


     if (errosValidação == 0  ) {
        setTimeout(() => {
            window.location.assign("login.html");
        }, "2500")

        Swal.fire({
            icon: 'success',
            title: '<h3>Cadastro Confirmado!!</h3> <br> Indo para a tela de login.',
            showConfirmButton: false
        })
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                emailServer: document.getElementById("inputEmail").value,
                senhaServer: document.getElementById("inputSenha").value,

              })
            }).then(function (resposta) {

                console.log("resposta: ", resposta);
    
                if (resposta.ok) {
    
                } else {
                    throw ("Houve um erro ao tentar realizar o cadastro!");
                }
            }).catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });
    
            return false;
        }

    
    else {
        Swal.fire({
            icon: 'error',
            title: '<h3>Dados Invalidos</h3> <br> Verifique se tudo está digitado corretamente.',
            showConfirmButton: false
        })
        setTimeout(() => {
            window.location.assign("cadastro-pt2.html");
        }, "2500")
    }
}
