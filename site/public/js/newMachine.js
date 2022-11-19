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


function sendNewMachine() {

    var senha = document.getElementById("inputConfirmacao").value
    var setor = document.getElementById('inputSetor').value
    var fk_empresa = sessionStorage.FK_EMPRESA

    if (sessionStorage.SENHA_USUARIO == senha && setor != "") {

        getSetor(setor, fk_empresa)
    }
    else if(setor == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'O campo setor está vazio!!',
            toast: true,
            showConfirmButton: false,
            timer: 3500
          })
          fecharNewMachine()
    }
    else {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Senha errada!',
            toast: true,
            showConfirmButton: false,
            timer: 3500
          })
          fecharNewMachine()
    }
}

function getFK_maquina() {
    fetch("/setorMaquina/getLastMaquinaId", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({

        }),
    })
        .then(function (resposta) {
            if (resposta.ok) {

                resposta.json().then((json) => {
                    console.log(json);
                    console.log(JSON.stringify(json) + 'exibindo json stringfy');
                    Swal.fire({
                        position: 'top-end',
                        icon: 'sucess',
                        title: '<h5>Maquina Cadastrada com Sucesso!</h5> seu id é '+ json.idMaquina,
                        showConfirmButton: false,
                        timer: 2500
                      })
                      fecharNewMachine()
                });

            } else {
                console.log("Houve um erro ao tentar o select!");

                resposta.text().then((texto) => {
                    console.error(texto);
                });
            }
        })
        .catch(function (erro) {
            console.log(erro);
        });

}
function getFkSetor(setor, fk_empresa) {
    fetch("/setorMaquina/getFkSetor", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({

            setorServer: setor,
            fk_empresaServer: fk_empresa

        }),
    })
        .then(function (resposta) {
            if (resposta.ok) {

                resposta.json().then((json) => {
                    console.log(json);
                    console.log(JSON.stringify(json) + 'exibindo json stringfy');
                    console.log(json[0].idSetor)
                    fetchMaquina(json[0].idSetor)
                });

            } else {
                console.log("Houve um erro ao tentar o select!");

                resposta.text().then((texto) => {
                    console.error(texto);
                });
            }
        })
        .catch(function (erro) {
            console.log(erro);
        });

}

function getSetor(setor, fk_Empresa) {
    fetch("/setorMaquina/getSetor", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({

            setorServer: setor,
            fk_empresaServer: fk_Empresa

        }),
    })
        .then(function (resposta) {
            if (resposta.ok) {

                resposta.json().then((json) => {

                    if (json.length == 1) {
                        console.log(json);
                        console.log(JSON.stringify(json) + 'exibindo json stringfy');
                        fetchMaquina(json[0].idSetor)
                    }
                    else {
                        console.log(json);
                        console.log(JSON.stringify(json) + 'exibindo json stringfy');
                        fetchSetor(setor, fk_Empresa)
                    }
                });

            } else {
                console.log("Houve um erro ao tentar o select!");

                resposta.text().then((texto) => {
                    console.error(texto);
                });
            }
        })
        .catch(function (erro) {
            console.log(erro);
        });


}

function fetchMaquina(setor) {
    fetch("/setorMaquina/cadastrarMaquina", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js

            setorServer: setor
        })
    }).then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            
            getFK_maquina()
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}

function fetchSetor(setor, fk_empresa) {
    fetch("/setorMaquina/cadastrarSetor", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js

            setorServer: setor,
            fk_empresaServer: fk_empresa
        })
    }).then(function (resposta) {
        console.log("resposta: ", resposta);
        if (resposta.ok) {

            getFkSetor(setor, fk_empresa)

        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

}