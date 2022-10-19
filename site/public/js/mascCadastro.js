var cep = document.getElementById('inputCep');
var cnpj = document.getElementById('inputCnpj');

cep.addEventListener('keypress', () => {
    let inputlength = cep.value.length;

    if (inputlength === 5){
        cep.value += "-"
    }
});

cnpj.addEventListener('keypress', () => {
    let inputlength = cnpj.value.length;

    if(inputlength === 2 || inputlength === 6){
        cnpj.value += ".";
    }else if(inputlength === 10){
        cnpj.value += "/";
    }else if(inputlength === 15){
        cnpj.value += "-";
    }
})