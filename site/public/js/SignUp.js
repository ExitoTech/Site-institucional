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
    var Cep = inputCep.value

    if (Cep.length == 8) {
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

    if(selectPorte == 1 ||selectPorte == 2 || selectPorte == 3){
        selectPorte.style.color = "green"
    } else {
        selectPorte.style.color = "#d90429"
    }

   if(selectPorte == 1){

    porte = "Grande Porte"
   }
   else if(selectPorte == 2){

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
        fetch("/usuarios/guard", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: document.getElementById("inputNomeDaEmpresa").value,
            cepServer: document.getElementById("inputCep").value,
            cnpjServer: document.getElementById("inputCnpj").value,
            porteServer: porte,
            logradouroServer: document.getElementById("inputLogradouro").value,
            ufServer: document.getElementById("inputUf").value,

          })
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {
                
            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            finalizarAguardar();
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
            window.location.assign("cadastro.html");
        }, "2500")
    }
}
