function newMachineUser() {

    divConfirmacao = document.getElementById('confirmacaoNewMachine')

    if (divConfirmacao.style.display !== 'flex') {
        divConfirmacao.style.display = "flex"
    }

}

function fecharNewMachine() {
    divConfirmacao = document.getElementById('confirmacaoNewMachine')

    if (divConfirmacao.style.display !== 'none') {
        divConfirmacao.style.display = "none"
    }
}


function sendNewMachine(){

     var senha = document.getElementById("inputConfirmacao").value
    
    if (sessionStorage.SENHA_USUARIO == senha){

    fetch("/usuarios/cadastrarMaquina", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
          })
        }).then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                alert("Maquina Cadastrada com sucesso!")
                
            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
    }
    else{

        alert("Senha incorreta")
    }
}


