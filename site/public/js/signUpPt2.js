function entrarDivA() {
    textoLink.innerHTML = `< voltar`

}

function sairDivA() {
    textoLink.innerHTML = 'ExitoTech'
}

function validarNome() {
    var Nome = inputNome.value;

    if (Nome.length >= 3) {
        inputNome.style.borderLeft = "none";
        inputNome.style.borderTop = "none";
        inputNome.style.borderRight = "none";
        spanNome.innerHTML = "Ok"
        spanNome.style.color = "#80b918"
    }
    else {
        inputNome.style.borderLeft = "none";
        inputNome.style.borderTop = "none";
        inputNome.style.borderRight = "none";
        spanNome.innerHTML = "O nome deve conter ao menos 3 caracteres";
        spanNome.style.color = "#d90429";
    }
}

function validarEmail() {
    var Email = inputEmail.value

    if (Email.length > 5 && Email.indexOf('@') > -1 && Email.indexOf(".") > -1) {
        inputEmail.style.borderLeft = "none";
        inputEmail.style.borderTop = "none";
        inputEmail.style.borderRight = "none";
        spanEmail.innerHTML = "Ok";
        spanEmail.style.color = "#80b918";
    }

    else {
        inputEmail.style.borderLeft = "none";
        inputEmail.style.borderTop = "none";
        inputEmail.style.borderRight = "none";
        spanEmail.innerHTML = "O email deve conter @";
        spanEmail.style.color = "#d90429";
    }
}

function validarCpf() {
    var Cpf = inputCpf.value

    if (Cpf.length == 14) {
        inputCpf.style.borderLeft = "none";
        inputCpf.style.borderTop = "none";
        inputCpf.style.borderRight = "none";
        spanCpf.innerHTML = "Ok";
        spanCpf.style.color = "#80b918";
    }
    else {
        inputCpf.style.borderLeft = "none";
        inputCpf.style.borderTop = "none";
        inputCpf.style.borderRight = "none";
        spanCpf.innerHTML = "O CPF deve conter 11 dígitos";
        spanCpf.style.color = "#d90429";
    }
}

function validarCep() {
    var cep = inputCep.value;

    if(cep.length === 9) {
        inputCep.style.borderLeft = "none";
        inputCep.style.borderTop = "none";
        inputCep.style.borderRight = "none";
        spanCep.innerHTML = "Ok";
        spanCep.style.color = "#80b918";
    }
    else {
        inputCep.style.borderLeft = "none";
        inputCep.style.borderTop = "none";
        inputCep.style.borderRight = "none";
        spanCep.innerHTML = "O CEP deve conter 8 dígitos";
        spanCep.style.color = "#d90429";
    }
}

function validarTelefone() {
    var Telefone = inputTelefone.value

    buttonCad.style.marginTop = "2rem"

    if (Telefone.length === 15) {
        inputTelefone.style.borderLeft = "none";
        inputTelefone.style.borderTop = "none";
        inputTelefone.style.borderRight = "none";
        spanTelefone.innerHTML = "Ok";
        spanTelefone.style.color = "#80b918";
    }
    else {
        inputTelefone.style.borderLeft = "none";
        inputTelefone.style.borderTop = "none";
        inputTelefone.style.borderRight = "none";
        spanTelefone.innerHTML = "O telefone conter o 11 dígitos, incluindo o DDD";
        spanTelefone.style.color = "#d90429";
    }
}

/* function verificarEmail() {

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
} */

function validarSenha() {

    var testeSenha = inputSenha.value

    if (testeSenha.length >= 8) {
        inputSenha.style.borderLeft = "none";
        inputSenha.style.borderTop = "none";
        inputSenha.style.borderRight = "none";
        spanSenha.innerHTML = "Ok";
        spanSenha.style.color = "#80b918";
    }
    else if (testeSenha == '') {
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

    var testeConfirmarSenha = inputConfirmarSenha.value
    var testeSenha = inputSenha.value


    if (testeConfirmarSenha == testeSenha) {
        inputConfirmarSenha.style.borderLeft = "none";
        inputConfirmarSenha.style.borderTop = "none";
        inputConfirmarSenha.style.borderRight = "none";
        spanConfirmarSenha.innerHTML = "Ok";
        spanConfirmarSenha.style.color = "#80b918";
    }
    else if (testeConfirmarSenha == '') {
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



function nextSignUp() {

    var errosValidação = 0

    var inputRepetirSenha = document.getElementById("inputConfirmarSenha").value
    var inputSenha = document.getElementById("inputSenha").value
    var inputEmail = document.getElementById("inputEmail").value

    if (inputRepetirSenha != inputSenha) {

        errosValidação++

    }
    else if (inputSenha < 8) {

        errosValidação++

    }
    else if (inputEmail.length < 5 && !inputEmail.indexOf('@') > -1 && !inputEmail.indexOf(".") > -1) {

        errosValidação++
    }


    if (errosValidação == 0) {
       cadastreEmpresa()
        sessionStorage.clear()

        setTimeout(() => {
            window.location.assign("login.html");
        }, "2500")

        Swal.fire({
            icon: 'success',
            title: '<h3>Cadastro Confirmado!!</h3> <br> Indo para a tela de login.',
            showConfirmButton: false
        })
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
function GerarSenhaSegura() {
    var safePassword = Math.random().toString(36).slice(-10)
    console.log(safePassword)
    Swal.fire({
        title: `Copie a senha: ${safePassword}`,
        toast: true
    })
}


function cadastreEmpresa() {
    fetch("/usuarios/cadastrarEmpresa", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeEmpresaServer: sessionStorage.NOME_EMPRESA,
            cepEmpresaServer: sessionStorage.CEP_EMPRESA,
            cnpjEmpresaServer: sessionStorage.CNPJ_EMPRESA,
            porteEmpresaServer: sessionStorage.PORTE_EMPRESA,
            ruaEmpresaServer: sessionStorage.RUA_EMPRESA,
            ufEmpresaServer: sessionStorage.UF,
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
          
            getFK_empresa()
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}

function cadastreUsuario(idempresa) {
    fetch("/usuarios/cadastrarUsuarioADM", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: document.getElementById("inputNome").value,
            emailServer: document.getElementById("inputEmail").value,
            senhaServer: document.getElementById("inputSenha").value,
            cpfUsuarioServer: document.getElementById("inputCpf").value,
            cepUsuarioServer: document.getElementById("inputCep").value,
            telefoneUsuarioServer: document.getElementById("inputTelefone").value,
            fk_empresaServer: idempresa,
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

}

function getFK_empresa(){
    fetch("/usuarios/getLastEmpresaId", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({

        }),
    })
        .then(function (resposta) {
            if (resposta.ok) {

                resposta.json().then((json) => {
                    console.log(json);
                    console.log(JSON.stringify(json) + 'exibindo json stringfy');
                    cadastreUsuario(json.idempresa)
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

