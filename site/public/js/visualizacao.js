function mudarRam() {
    var verRam = sessionStorage.VISUALIZAR_RAM 
    
    if(verRam == 1 || verRam == true){
        sessionStorage.VISUALIZAR_RAM = 0
        verRam = 0
    }else{
        sessionStorage.VISUALIZAR_RAM = 1
        verRam = 1
    }

            fetch("/usuarios/mudarRam", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    verRamServer: verRam,
                    idFuncionarioServer: sessionStorage.ID_USUARIO, 
                }),
            })
                .then(function (resposta) {
                    if (resposta.ok) {
                        resposta.text().then((texto) => {
                            console.error(texto);
                        });
                    } else {
                        console.log("Houve um erro ao tentar o select!");
                        
                        alert('Alteração salva')
                        
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

function mudarCpu() {
    var verCpu = sessionStorage.VISUALIZAR_CPU 
    
    if(verCpu == 1 || verCpu == true){
        sessionStorage.VISUALIZAR_CPU = 0
        verCpu = 0
    }else{
        sessionStorage.VISUALIZAR_CPU = 1
        verCpu = 1
    }

            fetch("/usuarios/mudarCpu", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    verCpuServer: verCpu,
                    idFuncionarioServer: sessionStorage.ID_USUARIO, 
                }),
            })
                .then(function (resposta) {
                    if (resposta.ok) {
                        resposta.text().then((texto) => {
                            console.error(texto);
                        });
                    } else {
                        console.log("Houve um erro ao tentar o select!");
                        
                        alert('Alteração salva')
                        
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

function mudarDisco() {
    var verDisco = sessionStorage.VISUALIZAR_DISCO 
    
    if(verDisco == 1 || verDisco == true){
        sessionStorage.VISUALIZAR_DISCO = 0
        verDisco = 0
    }else{
        sessionStorage.VISUALIZAR_DISCO = 1
        verDisco = 1
    }

            fetch("/usuarios/mudarDisco", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    verDiscoServer: verDisco,
                    idFuncionarioServer: sessionStorage.ID_USUARIO, 
                }),
            })
                .then(function (resposta) {
                    if (resposta.ok) {
                        resposta.text().then((texto) => {
                            console.error(texto);
                        });
                    } else {
                        console.log("Houve um erro ao tentar o select!");
                        
                        alert('Alteração salva')
                        
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