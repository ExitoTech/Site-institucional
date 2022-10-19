function entrarDivA(){
    textoLink.innerHTML= `< voltar`
    
}

function sairDivA(){
    textoLink.innerHTML= 'ExitoTech'
}

var porte = ""

function validarNomeEmpresa() {
    var nomeEmpresa = inputNomeDaEmpresa.value;

    if (nomeEmpresa.length >= 3) {
        spanEmpresa.innerHTML = "O nome está dentro dos padrões";
        spanEmpresa.style.color = "#80b918";
    }
    else {
        spanEmpresa.innerHTML = "O nome deve conter ao menos 3 caracteres";
        spanEmpresa.style.color = "#d90429";
    }
}

function verificarCep() {
    var Cep = inputCep.value

    if (Cep.length == 9) {
        inputCep.style.color = "#80b918";
        inputCep.style.borderLeft = "none";
        inputCep.style.borderTop = "none";
        inputCep.style.borderRight = "none";
        spanCep.innerHTML = "O CEP está dentro do padrão";
        spanCep.style.color = "#80b918";
        spanLogradouro.innerHTML = "OK";
        spanLogradouro.style.color = "#80b918";
        spanUf.innerHTML = "OK";
        spanUf.style.color = "#80b918";
    }

    else {
        inputCep.style.color = "#d90429";
        inputCep.style.border = "2px solid #000633";
        inputCep.style.borderLeft = "none";
        inputCep.style.borderTop = "none";
        inputCep.style.borderRight = "none";
        spanCep.innerHTML = "O CEP deve conter 8 dígitos";
        spanCep.style.color = "#d90429";
    }
}

function verificarCnpj() {
    var cnpj = inputCnpj.value

    if (cnpj.length == 18) {
        inputCnpj.style.color = "#80b918";
        inputCnpj.style.borderLeft = "none";
        inputCnpj.style.borderTop = "none";
        inputCnpj.style.borderRight = "none";
        spanCnpj.innerHTML = "O CNPJ está dentro do padrão";
        spanCnpj.style.color = "#80b918";
    }
    else {
        inputCnpj.style.color = "#d90429";
        inputCnpj.style.border = "2px solid #000633";
        inputCnpj.style.borderLeft = "none";
        inputCnpj.style.borderTop = "none";
        inputCnpj.style.borderRight = "none";
        spanCnpj.innerHTML = "O CNPJ deve conter 14 dígitos";
        spanCnpj.style.color = "#d90429";
    }
}

function validarPorte(){
    var porteStyle = document.getElementById('selectPorte');
    var porteEmpresa = document.getElementById('selectPorte').value;

    if(porteEmpresa == 1 || porteEmpresa == 2 || porteEmpresa == 3){
        porteStyle.style.color = "#80b918"
    } else {
        porteStyle.style.color = "#d90429"
    }

   if(porteEmpresa == 1){

    porte = "Grande Porte"
   }
   else if(porteEmpresa == 2){

    porte =  "Médio Porte"

   }
   else{

    porte = "Pequeno Porte"
     
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
    else if( selectPorte.style.color != "green"){

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
        sessionStorage.setItem("NOME_EMPRESA" ,document.getElementById("inputNomeDaEmpresa").value) 
        sessionStorage.setItem("CEP_EMPRESA",document.getElementById("inputCep").value) 
        sessionStorage.setItem("CNPJ_EMPRESA",document.getElementById("inputCnpj").value) 
        sessionStorage.setItem("PORTE_EMPRESA", porte)
        sessionStorage.setItem("RUA_EMPRESA",document.getElementById("inputLogradouro").value) 
        sessionStorage.setItem("UF", document.getElementById("inputUf").value) 
  
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
