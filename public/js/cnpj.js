const cnpj = document.getElementById('inputCnpj');

cnpj.addEventListener('keypress', () => {
    let inputlength = cnpj.value.length;
    
    if(inputlength === 2 || inputlength === 6){
        cnpj.value += "."
    } else if (inputlength === 10){
        cnpj.value += "/"
    } else if (inputlength === 15){
        cnpj.value += "-"
    }
});

const inputCnpj = document.getElementById('cnpj');

inputCnpj.addEventListener('keypress', () => {
    let inputlength = inputCnpj.value.length;
    
    if(inputlength === 2 || inputlength === 6){
        inputCnpj.value += "."
    } else if (inputlength === 10){
        inputCnpj.value += "/"
    } else if (inputlength === 15){
        inputCnpj.value += "-"
    }
});