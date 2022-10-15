function entrarDivA() {
    textoLink.innerHTML = `< voltar`

}

function sairDivA() {
    textoLink.innerHTML = 'ExitoTech'
}

function validarNome() {
    var Nome = inputNome.value;

    if (Nome.length >= 3) {
        inputNome.style.color = "#80b918";
        inputNome.style.borderLeft = "none";
        inputNome.style.borderTop = "none";
        inputNome.style.borderRight = "none";
    }
    else {
        inputNome.style.color = "#d90429";
        inputNome.style.borderLeft = "none";
        inputNome.style.borderTop = "none";
        inputNome.style.borderRight = "none";
    }
}

function validarEmail() {
    var Email = inputEmail.value

    if (Email.length > 5 && Email.indexOf('@') > -1 && Email.indexOf(".") > -1) {
        inputEmail.style.color = "#80b918";
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

function validarCpf() {
    var Cpf = inputCpf.value

    if (Cpf.length == 11) {
        inputCpf.style.color = "#80b918";
        inputCpf.style.borderLeft = "none";
        inputCpf.style.borderTop = "none";
        inputCpf.style.borderRight = "none";
    }
    else {
        inputCpf.style.color = "#d90429";
        inputCpf.style.border = "2px solid #000633";
        inputCpf.style.borderLeft = "none";
        inputCpf.style.borderTop = "none";
        inputCpf.style.borderRight = "none";
    }
}

function validarTelefone() {
    var Telefone = inputTelefone.value

    if (Telefone.length >= 10 && Telefone.length <= 11) {
        inputTelefone.style.color = "#80b918";
        inputTelefone.style.borderLeft = "none";
        inputTelefone.style.borderTop = "none";
        inputTelefone.style.borderRight = "none";
    }
    else {
        inputTelefone.style.color = "#d90429";
        inputTelefone.style.border = "2px solid #000633";
        inputTelefone.style.borderLeft = "none";
        inputTelefone.style.borderTop = "none";
        inputTelefone.style.borderRight = "none";
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

function validarConfirmarSenha() {

    var testeConfirmarSenha = inputConfirmarSenha.value
    var testeSenha = inputSenha.value


    if (testeConfirmarSenha == testeSenha) {
        inputConfirmarSenha.style.border = "2px solid green";
        inputConfirmarSenha.style.borderLeft = "none";
        inputConfirmarSenha.style.borderTop = "none";
        inputConfirmarSenha.style.borderRight = "none";
    }
    else if (testeConfirmarSenha == '') {
        inputConfirmarSenha.style.border = "2px solid #b8860b";
        inputConfirmarSenha.style.borderLeft = "none";
        inputConfirmarSenha.style.borderTop = "none";
        inputConfirmarSenha.style.borderRight = "none";
    }

    else {
        inputConfirmarSenha.style.border = "2px solid red";
        inputConfirmarSenha.style.borderLeft = "none";
        inputConfirmarSenha.style.borderTop = "none";
        inputConfirmarSenha.style.borderRight = "none";
    }
}



function nextSignUp() {

    var errosValidação = 0

    var inputRepetirSenha = document.getElementById("inputConfirmarSenha")
    var inputSenha = document.getElementById("inputSenha")
    var inputEmail = document.getElementById("inputEmail")

    if (inputRepetirSenha.style.borderBottom != "2px solid green") {

        errosValidação++

    }
    else if (inputSenha.style.borderBottom != "2px solid green") {

        errosValidação++

    }
    else if (inputEmail.style.color != "rgb(128, 185, 24)") {

        errosValidação++
    }


    if (errosValidação == 0) {


        cadastreEmpresa()

        cadastreUsuario()

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
            return true
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}

function cadastreUsuario() {
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
            cepUsuarioServer: document.getElementById("inputCEP").value,
            telefoneUsuarioServer: document.getElementById("inputTelefone").value,
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            return true
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

}

