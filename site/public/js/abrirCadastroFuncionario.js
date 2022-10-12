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
