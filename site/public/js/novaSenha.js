var validado = 0;

function voltar(){
    window.location.href = "http://localhost:3333/codigoSenha.html"
}

function verificarCodigo() {
    fetch("/usuarios/verificarCodigo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            codigoServer: document.getElementById('inputCodigo').value,
        }),
    })
        .then(function (resposta) {
            if (resposta.ok) {
                alert('Código verificado! Você já será redirecionado para alterar sua senha!')
                window.location.href="http://localhost:3333/novaSenha.html"
                sessionStorage.CODIGO_USUARIO = document.getElementById('inputCodigo').value;

                resposta.json().then((json) => {
                    console.log(json);
                    console.log(JSON.stringify(json) + 'exibindo json stringfy');
                });

            } else {
                console.log("Houve um erro ao tentar o select!");
                alert('Código inválido')
                resposta.text().then((texto) => {
                    console.error(texto);
                });
            }
        })
        .catch(function (erro) {
            console.log(erro);
        });
}

function cadastrarNovaSenha(){
    validarSenha();
    validarConfirmarSenha();

    if(validado==2){
        fetch("/usuarios/novaSenha", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                senhaServer: document.getElementById('inputSenha').value,
                codigoServer: sessionStorage.CODIGO_USUARIO, 
            }),
        })
            .then(function (resposta) {
                if (resposta.ok) {
                    resposta.text().then((texto) => {
                        console.error(texto);
                    });
                } else {
                    console.log("Houve um erro ao tentar o select!");
                    
                    alert('Sua senha foi alterada!')
                    window.location.href="http://localhost:3333/login.html"
                    resposta.json().then((json) => {
                        console.log(json);
                        console.log(JSON.stringify(json) + 'exibindo json stringfy');
                    });
    
                }
            })
            .catch(function (erro) {
                console.log(erro);
            });

    }else{
        alert('É necessário que as senhas estejam iguais')
    }     


}


function validarSenha() {

    var novaSenha = inputSenha.value

    if (novaSenha.length >= 8) {
        inputSenha.style.borderLeft = "none";
        inputSenha.style.borderTop = "none";
        inputSenha.style.borderRight = "none";
        spanSenha.innerHTML = "Ok";
        spanSenha.style.color = "#80b918";

        validado ++;
        
    }
    else if (novaSenha == '') {
        inputSenha.style.borderLeft = "none";
        inputSenha.style.borderTop = "none";
        inputSenha.style.borderRight = "none";
        spanSenha.innerHTML = "Este campo não pode ficar vazio";
        spanSenha.style.color = "#d90429";
    }
    else {
        inputSenha.style.borderLeft = "none";
        inputSenha.style.borderTop = "none";
        inputSenha.style.borderRight = "none";
        spanSenha.innerHTML = "A senha  deve conter no mínimo 8 digítos e um caracter especial";
        spanSenha.style.color = "#d90429";
    }
}

function validarConfirmarSenha() {

    var ConfirmarNovaSenha = inputConfirmarSenha.value
    var novaSenha = inputSenha.value


    if (ConfirmarNovaSenha == novaSenha) {
        inputConfirmarSenha.style.borderLeft = "none";
        inputConfirmarSenha.style.borderTop = "none";
        inputConfirmarSenha.style.borderRight = "none";
        spanConfirmarSenha.innerHTML = "Ok";
        spanConfirmarSenha.style.color = "#80b918";
        validado++;
    }
    else if (ConfirmarNovaSenha == '') {
        inputConfirmarSenha.style.borderLeft = "none";
        inputConfirmarSenha.style.borderTop = "none";
        inputConfirmarSenha.style.borderRight = "none";
        spanConfirmarSenha.innerHTML = "Este campo não pode ficar vazio";
        spanConfirmarSenha.style.color = "#d90429";
    }
    else {
        inputConfirmarSenha.style.borderLeft = "none";
        inputConfirmarSenha.style.borderTop = "none";
        inputConfirmarSenha.style.borderRight = "none";
        spanConfirmarSenha.innerHTML = "As senhas devem ser iguais";
        spanConfirmarSenha.style.color = "#d90429";
    }
}
