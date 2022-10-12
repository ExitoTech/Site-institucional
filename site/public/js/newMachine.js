function newMachineUser() {

    divConfirmacao = document.getElementById('confirmacaoNewMachine')

    if (divConfirmacao.style.display !== 'flex') {
        divConfirmacao.style.display = "flex"
    }

}

function fecharNewMachine() {
    divConfirmacao = document.getElementById('confirmacaoNewMachine')

    if (divConfirmacao.style.display !== 'none') {
        divConfirmacao.style.display = "none"
    }
}