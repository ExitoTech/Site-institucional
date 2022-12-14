function getAllSetors(){
    fetch("/setorMaquina/getAllSetor", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fk_empresaServer: sessionStorage.FK_EMPRESA,
        }),
    })
        .then(function (resposta) {
            if (resposta.ok) {

                resposta.json().then((json) => {
                    
                    console.log(json);
                    console.log(JSON.stringify(json) + 'exibindo json stringfy');
                    

                    for(i = 0;i< json.length;i++){

                        document.getElementsByClassName('selectSetor')[1].innerHTML += "<option value='" + json[i].nomeSetor.split('setor')[1] + "'" + "class='tituloInfo Setor'>" + json[i].nomeSetor.split('setor')[1] + "</option>"

                    }
                    getMachinePerSector()
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


function getMachinePerSector(){
    fetch("/setorMaquina/getMachinePerSector", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fkEmpresaServer: sessionStorage.FK_EMPRESA,
            setorServer: document.getElementsByClassName('selectSetor')[1].value
        }),
    })
        .then(function (resposta) {
            if (resposta.ok) {

                document.getElementsByClassName('selectSetor')[0].innerHTML = ""

                resposta.json().then((json) => {
                    
                    console.log(json);
                    console.log(JSON.stringify(json) + 'exibindo json stringfy');
                    for(i = 0;i< json.length;i++){
                        document.getElementsByClassName('selectSetor')[0].innerHTML += "<option value='" + json[i].idMaquina  + "'" + "class='tituloInfo Setor'>" + json[i].idMaquina + "</option>"
                    }
                    capturaDeHardware()
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

function capturaDeDados(idMaquina){

    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/medidas/ultimas/${idMaquina}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarGrafico(resposta, document.getElementsByClassName('selectSetor')[0].value);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obten????o dos dados p/ gr??fico: ${error.message}`);
        });
}

function capturaDeHardware(){
    fetch("/setorMaquina/getHardInfo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            maquinaServer: document.getElementsByClassName('selectSetor')[0].value
        }),
    })
        .then(function (resposta) {
            if (resposta.ok) {

                resposta.json().then((json) => {
                    
                    console.log(json);
                    console.log(JSON.stringify(json) + 'exibindo json stringfy');

                    document.getElementById('memoriaRam').innerHTML = json[0].memoriaRam
                    document.getElementById('memoriaMassa').innerHTML = json[0].memoriaMassa
                    document.getElementById('processador').innerHTML = json[0].processador
                    document.getElementById('arquitetura').innerHTML = json[0].arquiteturaSO
                    document.getElementById('sistemaOperacional').innerHTML = json[0].sistemaOperacional

                    capturaDeDados(document.getElementsByClassName('selectSetor')[0].value)

             
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


