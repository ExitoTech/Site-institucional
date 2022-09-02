function validarNomeEmpresa() {
    var nomeEmpresa = inputNomeDaEmpresa.value;

    if (nomeEmpresa.length >= 3) {
        inputNomeDaEmpresa.style.color = "#80b918";
        inputNomeDaEmpresa.style.borderLeft = "none";
        inputNomeDaEmpresa.style.borderTop = "none";
        inputNomeDaEmpresa.style.borderRight = "none";
    }
    else {
        inputNomeDaEmpresa.style.color = "#d90429";
        inputNomeDaEmpresa.style.borderLeft = "none";
        inputNomeDaEmpresa.style.borderTop = "none";
        inputNomeDaEmpresa.style.borderRight = "none";
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
        selectPorte.style.color = "green"
    } else {
        selectPorte.style.color = "#d90429"
    }
}


function nextSignUp() {

    var errosValidação = 0

    if(inputNomeDaEmpresa.style.color != "rgb(128, 185, 24)"){

        errosValidação++
    }
    else if(inputCep.style.color != "rgb(128, 185, 24)"){

        errosValidação++

    }
    else if( selectPorte.style.color != "rgb(217, 4, 41)"){

        errosValidação++
    }
    else if(inputCnpj.style.color != "rgb(128, 185, 24)"){

        errosValidação++

    }


     if (errosValidação == 0  ) {
        setTimeout(() => {
            window.location.assign("cadastro-pt2.html");
        }, "2500")

        Swal.fire({
            icon: 'success',
            title: '<h3>Dados enviados com sucesso</h3> <br> Indo para a proxima etapa.',
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
            window.location.assign("cadastro.html");
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
