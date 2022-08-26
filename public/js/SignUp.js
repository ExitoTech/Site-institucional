
var errosValidacao = 0;


function nextSignUp() {

    var nome = nomeDaEmpresa.value;

    if (nome.length < 3) {
        console.log('xpto');
        errosValidacao++;
    }

    else if (errosValidacao == 0) {
        setTimeout(() => {
            window.location.assign("cadastro-pt2.html");
        }, "2500")

        Swal.fire({
            icon: 'success',
            title: '<h3>Dados enviados com sucesso</h3> <br> Indo para a proxima etapa.',
            showConfirmButton: false
    })
    }
}