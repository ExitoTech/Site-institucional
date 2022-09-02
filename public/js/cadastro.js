var cnpj = document.getElementById('inputCnpj');

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