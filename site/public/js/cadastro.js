var cnpj = document.getElementById('inputCnpj');
var cep = document.getElementById('inputCep');
var cpf = document.getElementById('inputCpf');
var telefone = document.getElementById('inputTelefone');

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

cnpj.addEventListener('keypress', () => {
    let inputlength = cnpj.value.length;

    if (inputlength === 2 || inputlength === 6) {
        cnpj.value += "."
    } else if (inputlength === 10) {
        cnpj.value += "/"
    } else if (inputlength === 15) {
        cnpj.value += "-"
    }
});

var labels = document.querySelectorAll(".formControl label");

labels.forEach((label) => {
    label.innerHTML = label.innerText
        .split("")
        .map(
            (letter, idx) =>
                `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
        )
        .join("");
})