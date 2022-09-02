var errosValidação = 0;


function validarNomeEmpresa() {
    var nomeEmpresa = inputNomeDaEmpresa.value;
    if (nomeEmpresa.length >= 3) {
        inputNomeDaEmpresa.style.color = "#80b918";
        inputNomeDaEmpresa.style.borderLeft = "none";
        inputNomeDaEmpresa.style.borderTop = "none";
        inputNomeDaEmpresa.style.borderRight = "none";
    }
    else if (nomeEmpresa == "") {
        inputNomeDaEmpresa.style.color = "#ffc300";
        inputNomeDaEmpresa.style.borderLeft = "none";
        inputNomeDaEmpresa.style.borderTop = "none";
        inputNomeDaEmpresa.style.borderRight = "none";
        errosValidação++;
    }
    else {
        inputNomeDaEmpresa.style.color = "#d90429";
        inputNomeDaEmpresa.style.borderLeft = "none";
        inputNomeDaEmpresa.style.borderTop = "none";
        inputNomeDaEmpresa.style.borderRight = "none";
        errosValidação++;
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
        errosValidação++;
    }

    else {
        inputCep.style.color = "#d90429";
        inputCep.style.border = "2px solid #000633";
        inputCep.style.borderLeft = "none";
        inputCep.style.borderTop = "none";
        inputCep.style.borderRight = "none";
        errosValidação++;
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
        errosValidação++;
    }
}

// function validarPorte(){
//     var porte = selectPorte;


//     if(porte == 1 || porte == 2 || porte == 3){
//         selectPorte.style.color = "green"
//     } else {
//         selectPorte.style.color = "#d90429"
//         errosValidação++;
//     }
// }


function nextSignUp() {


    // if (testeCep == "" || cnpj == "") {
    //     alert('fodase');
    // }
    // else if (errosValidação == 0) {
    //     setTimeout(() => {
    //         window.location.assign("cadastro-pt2.html");
    //     }, "2500")

    //     Swal.fire({
    //         icon: 'success',
    //         title: '<h3>Dados enviados com sucesso</h3> <br> Indo para a proxima etapa.',
    //         showConfirmButton: false
    //     })
    // }
    // else {
    //     Swal.fire({
    //         icon: 'error',
    //         title: '<h3>Dados Invalidos</h3> <br> Verifique se tudo esá digitado corretamente.',
    //         showConfirmButton: false
    //     })
    //     setTimeout(() => {
    //         window.location.assign("cadastro.html");
    //     }, "2500")
    // }
}

function GerarSenhaSegura() {
    var safePassword = Math.random().toString(36).slice(-10)
    console.log(safePassword)
    Swal.fire({
        title: `Copie a senha: ${safePassword}`,
        toast: true
    })
}
