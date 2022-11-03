var telefone = document.getElementById('telefoneCadastro');
var cpf = document.getElementById('cpfCadastro');
var cep = document.getElementById('cepCadastro');

telefone.addEventListener('keypress', ()=>{
    let inputlength = telefone.value.length;

    if(inputlength === 0){
        telefone.value += "("
    }else if(inputlength === 3){
        telefone.value += ") "
    }else if(inputlength === 10){
        telefone.value += "-";
    }
});

cpf.addEventListener('keypress', () => {
    let inputlength = cpf.value.length;

    if (inputlength === 3 || inputlength === 7) {
        cpf.value += "."
    }else if(inputlength === 11){
        cpf.value += "-"
    }
});

cep.addEventListener('keypress', () => {
    let inputlength = cep.value.length;

    if (inputlength === 5){
        cep.value += "-"
    }
});