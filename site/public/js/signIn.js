function    Entrar() {
    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            emailServer: document.getElementById('inputEmail').value ,
            senhaServer: document.getElementById('inputSenha').value,
        }),
    })
        .then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!");

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then((json) => {
                    console.log(json);
                    console.log(JSON.stringify(json));

                    // sessionStorage.EMAIL_USUARIO = json.email;
                    // sessionStorage.NOME_USUARIO = json.nome_usuario;
                    // sessionStorage.ID_USUARIO = json.id_usuario;
                    Swal.fire({
                        title: `Entrando..`,
                        toast: true,
                        showConfirmButton: false
                    })
                    setTimeout(function () {
                        window.location = "home.html";
                    }, 2000);
                });
            } else {
                console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then((texto) => {
                    console.error(texto);
                });
            }
        })
        .catch(function (erro) {
            console.log(erro);
        });
}
