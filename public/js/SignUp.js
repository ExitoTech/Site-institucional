function nextSignUp() {
    window.location.assign("cadastro-pt2.html");
}

function validarNome() {
    var nome = nomeDaEmpresa.value;

    if (nome.length < 3) {
        console.log('xpto');
    }
    else {
        console.log('deu bom!')
    }
}