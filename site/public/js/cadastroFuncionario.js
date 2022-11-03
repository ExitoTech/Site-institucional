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
                fecharCadFunc()
                
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

function validarNome(){
    var nome = nomeCadastro.value;

    if(nome.length >= 3){
        spanNome.innerHTML = "Ok";
        spanNome.style.color = "#80b918";
    }else{
        spanNome.innerHTML = "Nome inválido";
        spanNome.style.color = "#d90429";
    }
}

function validarCpf(){
    var cpf = cpfCadastro.value;

    if(cpf.length == 14){
        spanCpf.innerHTML = "Ok";
        spanCpf.style.color = "#80b918";
    }else{
        spanCpf.innerHTML = "CPF inválido";
        spanCpf.style.color = "#d90429";
    }
}

function validarEmail(){
    var email = emailCadastro.value;

    if (email.length > 5 && email.indexOf('@') > -1 && email.indexOf(".") > -1) {
        spanEmail.innerHTML = "Ok";
        spanEmail.style.color = "#80b918";
    }

    else {
        spanEmail.innerHTML = "Email inválido";
        spanEmail.style.color = "#d90429";
    }
}

function validarSenha(){
    var senha = senhaCadastro.value;

    if(senha.length >= 8){
        spanSenha.innerHTML = "Ok";
        spanSenha.style.color = "#80b918"
    }else{
        spanSenha.innerHTML = "Senha inválida";
        spanSenha.style.color = "#d90429"
    }
}

function validarTelefone(){
    var telefone = telefoneCadastro.value;

    if(telefone.length == 15){
        spanTelefone.innerHTML = "Ok";
        spanTelefone.style.color = "#80b918"
    }else{
        spanTelefone.innerHTML = "Telefone inválido";
        spanTelefone.style.color = "#d90429"
    }
}

function validarCep(){
    var cep = cepCadastro.value;

    if(cep.length == 9){
        spanCep.innerHTML = "Ok";
        spanCep.style.color = "#80b918"
    }else{
        spanCep.innerHTML = "CEP inválido";
        spanCep.style.color = "#d90429"
    }
}