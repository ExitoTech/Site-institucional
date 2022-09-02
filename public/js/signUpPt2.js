var testeMail = inputEmail.value
var testeSenha = inputSenha.value
var testeConfirmarSenha = inputRepetirSenha.value

function verificarEmail() {
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
        errosValidação++;
    }

    else {
        inputEmail.style.color = "#d90429";
        inputEmail.style.border = "2px solid #000633";
        inputEmail.style.borderLeft = "none";
        inputEmail.style.borderTop = "none";
        inputEmail.style.borderRight = "none";
        errosValidação++;
    }
}
function ValidaSenha() {

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
        errosValidação++;
    }

    else {
        inputSenha.style.border = "2px solid red";
        inputSenha.style.borderLeft = "none";
        inputSenha.style.borderTop = "none";
        inputSenha.style.borderRight = "none";
        errosValidação++;
    }
}

function ValidaConfirmarSenha() {
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
        errosValidação++;
    }

    else {
        inputRepetirSenha.style.border = "2px solid red";
        inputRepetirSenha.style.borderLeft = "none";
        inputRepetirSenha.style.borderTop = "none";
        inputRepetirSenha.style.borderRight = "none";
        errosValidação++;
    }
}