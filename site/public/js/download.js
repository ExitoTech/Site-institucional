function abrirDownload() {
    //If confirmando senha através do localstorage ou afim
    //Codar parte do código que faz animação funcionar

    divConfirmacao = document.getElementById('confirmacaoDownload')

    if (divConfirmacao.style.display !== 'flex') {
        divConfirmacao.style.display = "flex"
    }

}

function fecharDownload() {
    divConfirmacao = document.getElementById('confirmacaoDownload')

    if (divConfirmacao.style.display !== 'none') {
        divConfirmacao.style.display = "none"
    }
}

function iniciarDownload() {
    senhaInserida = document.getElementById('inputConfirmacao').value
    senha = sessionStorage.SENHA_USUARIO

    if (senhaInserida != senha) {
        alert('Senha incorreta, tente novamente!')
    } else {
        divConfirmacao = document.getElementById('confirmacaoDownload')

        if (divConfirmacao.style.display !== 'none') {
            divConfirmacao.style.display = "none"
        }


        exibirProgresso = document.getElementById('progressoDownload')
        icone = document.getElementById('iconDownload')
        if (exibirProgresso.style.display !== "flex") {
            icone.style.display = "none"
            exibirProgresso.style.display = "flex"


        }

        function waitforme(milisec) {
            return new Promise(resolve => {
                setTimeout(() => { resolve('') }, milisec)
            })
        }

        async function mostrarProgresso() {
            progresso = document.getElementById('circleProgress')
            for (width = 0.032; width <= 32; width += 0.032) {
                await waitforme(1)
                progresso.style.strokeDashoffset = 32 - width

            }

            await waitforme(1)
            document.getElementById('baixar').click();
        }

        mostrarProgresso();

        
        //Iniciar animação
    }


}
