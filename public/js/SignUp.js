var errosValidação = 0;

function validarNomeEmpresa(){
    var nomeEmpresa = inputNomeDaEmpresa.value;
    if(nomeEmpresa.length >= 3){
        inputNomeDaEmpresa.style.color = "#80b918";
        inputNomeDaEmpresa.style.borderLeft = "none";
        inputNomeDaEmpresa.style.borderTop = "none";
        inputNomeDaEmpresa.style.borderRight = "none";
    }
    else if(nomeEmpresa == ""){
        inputNomeDaEmpresa.style.border = "2px solid #ffc300";
        inputNomeDaEmpresa.style.borderLeft = "none";
        inputNomeDaEmpresa.style.borderTop = "none";
        inputNomeDaEmpresa.style.borderRight = "none";  
    }
    else{
        inputNomeDaEmpresa.style.color = "#d90429";
        inputNomeDaEmpresa.style.border = "2px solid #000633";
        inputNomeDaEmpresa.style.borderLeft = "none";
        inputNomeDaEmpresa.style.borderTop = "none";
        inputNomeDaEmpresa.style.borderRight = "none";  
    }
}

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

function verificarCep() {
    var testeCep = inputCep.value

    if (testeCep.length == 8) {
        inputCep.style.color = "#80b918";
        inputCep.style.borderLeft = "none";
        inputCep.style.borderTop = "none";
        inputCep.style.borderRight = "none";
    }
    else if (testeCep == '') {
        inputCep.style.border = "2px solid #ffc300";
        inputCep.style.borderLeft = "none";
        inputCep.style.borderTop = "none";
        inputCep.style.borderRight = "none";
    }

    else {
        inputCep.style.color = "#d90429";
        inputCep.style.border = "2px solid #000633";
        inputCep.style.borderLeft = "none";
        inputCep.style.borderTop = "none";
        inputCep.style.borderRight = "none";
    }
}

function verificarCnpj() {
    var cnpj = inputCnpj.value

    if (cnpj.length == 18) {
        inputCnpj.style.color = "#80b918";
        inputCnpj.style.borderLeft = "none";
        inputCnpj.style.borderTop = "none";
        inputCnpj.style.borderRight = "none";
    }
    else if (cnpj == '') {
        inputCnpj.style.border = "2px solid #ffc300";
        inputCnpj.style.borderLeft = "none";
        inputCnpj.style.borderTop = "none";
        inputCnpj.style.borderRight = "none";
    }

    else {
        inputCnpj.style.color = "#d90429";
        inputCnpj.style.border = "2px solid #000633";
        inputCnpj.style.borderLeft = "none";
        inputCnpj.style.borderTop = "none";
        inputCnpj.style.borderRight = "none";
    }
}

function validarPorte(){
    var porte = selectPorte;

    
    if(porte == 1 || porte == 2 || porte == 3){
        selectPorte.style.color = "#80b918"
    } else {
        selectPorte.style.color = "#d90429"
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

function ValidaConfirmarSenha(){
    
        var testeConfirmarSenha = inputRepetirSenha.value
        var testeSenha = inputSenha.value
    
        if (testeConfirmarSenha  == testeSenha) {
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
        setTimeout(() => {
            window.location.assign("cadastro-pt2.html");
        }, "2500")

        Swal.fire({
            icon: 'success',
            title: '<h3>Dados enviados com sucesso</h3> <br> Indo para a proxima etapa.',
            showConfirmButton: false
        })
}

function GerarSenhaSegura() {
    var safePassword = Math.random().toString(36).slice(-10)
    console.log(safePassword)
    Swal.fire({
        title: `Copie a senha: ${safePassword}`,
        toast: true
    })
}
