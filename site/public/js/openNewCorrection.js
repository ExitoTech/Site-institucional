function newCorrection() {

    divConfirmacao = document.getElementById('confirmacaoCorretion')

    if (divConfirmacao.style.display !== 'flex') {
        divConfirmacao.style.display = "flex"
    }

}

function fecharCorretion() {
    divConfirmacao = document.getElementById('confirmacaoCorretion')

    if (divConfirmacao.style.display !== 'none') {
        divConfirmacao.style.display = "none"
    }
}
