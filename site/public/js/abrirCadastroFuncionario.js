function abrirCadFunc() {

    divConfirmacao = document.getElementById('confirmacaoNewUser')

    if (divConfirmacao.style.display !== 'flex') {
        divConfirmacao.style.display = "flex"
    }

}

function fecharCadFunc() {
    divConfirmacao = document.getElementById('confirmacaoNewUser')

    if (divConfirmacao.style.display !== 'none') {
        divConfirmacao.style.display = "none"
    }
}

function enviarCadFunc(){
   var nome = document.getElementById("nomeCadastro").value
   var cpf = document.getElementById("cpfCadastro").value
   var email = document.getElementById("emailCadastro").value
   var senha = document.getElementById("senhaCadastro").value
   var telefone = document.getElementById("telefoneCadastro").value
   var cep = document.getElementById("cepCadastro").value

   if(nome != "" & cpf != "" & email != "" & senha != "" & telefone != "" & cep != ""){
    fetch("/usuarios/cadastrarFuncionario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nome,
            cpfServer: cpf,
            emailServer: email,
            senhaServer: senha,
            telefoneServer: telefone,
            cepServer: cep,
            fk_empresa: sessionStorage.FK_EMPRESA


          })
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {
                alert("Usuario Cadastrado com sucesso!")
                
            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
   }
   else{
    alert("Não pode ter nenhum campo vazio!")
   }



}