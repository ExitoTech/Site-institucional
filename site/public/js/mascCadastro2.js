var telefone = document.getElementById('inputTelefone');
var cpf = document.getElementById('inputCpf');
var cep = document.getElementById('inputCep');

telefone.addEventListener('keypress', ()=>{
    let inputlength = telefone.value.length;

    if(inputlength === 2){
        telefone.value += " ";
    }else if(inputlength === 8){
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