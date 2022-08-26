
var errosValidacao = 0;


function nextSignUp() {

    var nome = nomeDaEmpresa.value;

    if (nome.length < 3) {
        console.log('xpto');
        errosValidacao++;
    }

    
    
    //Essa parte do código é a em teoria a Principal, após fazer as validações ela decide se passa para a próxima página ou não,
    // mas no caso de não passar na validação a Variavel tem que voltar a valer 0 ou você prende o usuario.
     
    if (errosValidacao == 0) {
        setTimeout(() => {
            window.location.assign("cadastro-pt2.html");
        }, "2500")

        Swal.fire({
            icon: 'success',
            title: '<h3>Dados enviados com sucesso</h3> <br> Indo para a proxima etapa.',
            showConfirmButton: false
    })
    }
    else{

     errosValidacao = 0

    }
}


function valide(){

   var senha = inputSenha.value
   var senhaREP = inputRepetirSenha.value


   var valido = 0

   if (senha == "") {
    
    validacao_senha.innerHTML = `<span style="color: red">Campo de senha não pode estar vazio.</span>`
  }
  else if(senha.length <= 7)

   validacao_senha.innerHTML = `<span style="color: red">Campo de senha precisa ter no mínimo 8 caracteres.</span>`

   else{

    validacao_senha.innerHTML = `<span style="color: green">Válido</span>`

    valido++

   }

   if(senhaREP != senha || senhaREP == ""){

    validacao_senhaREP.innerHTML = `<span style="color: red">Senhas não conferem</span>`

   }
   else{
  
    validacao_senhaREP.innerHTML = `<span style="color: green">Válido</span>`

    valido++

   }


   if(valido == 2){

    setTimeout(() => {
        window.location.assign("index.html");
    }, "2500")

     Swal.fire({
        icon: 'success',
        title: '<h3>Dados enviados com sucesso</h3> <br> Indo para a proxima etapa.',
        showConfirmButton: false
})

   }


}