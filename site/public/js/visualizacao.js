function mudarRam() {
    var verRam = sessionStorage //a definir

            fetch("/usuarios/mudarRam", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    verRamServer: verRam,
                    codigoServer: sessionStorage.CODIGO_USUARIO, 
                }),
            })
                .then(function (resposta) {
                    if (resposta.ok) {
                        resposta.text().then((texto) => {
                            console.error(texto);
                        });
                    } else {
                        console.log("Houve um erro ao tentar o select!");
                        
                        alert('Sua senha foi alterada!')
                        window.location.href="http://localhost:3333/login.html"
                        resposta.json().then((json) => {
                            console.log(json);
                            console.log(JSON.stringify(json) + 'exibindo json stringfy');
                        });
        
                    }
                })
                .catch(function (erro) {
                    console.log(erro);
                });
}