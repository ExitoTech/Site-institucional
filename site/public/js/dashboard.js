function getAllSetors(){
    fetch("/usuarios/getAllSetor", {
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
                    

                    for(i = 0;i< json.length;i++){

                        document.getElementsByClassName('selectSetor')[0].innerHTML += "<option value='" + json[i].nomeSetor.split('setor')[1] + "'" + "class='tituloInfo Setor' selected>" + json[i].nomeSetor + "</option>"

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
    fetch("/medidas/getMachinePerSector", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fkEmpresaServer: sessionStorage.FK_EMPRESA,
            setorServer: document.getElementsByClassName('selectSetor')[0].value
        }),
    })
        .then(function (resposta) {
            if (resposta.ok) {

                document.getElementsByClassName('selectSetor')[1].innerHTML = ""

                resposta.json().then((json) => {
                    
                    console.log(json);
                    console.log(JSON.stringify(json) + 'exibindo json stringfy');
                    for(i = 0;i< json.length;i++){
                        document.getElementsByClassName('selectSetor')[1].innerHTML += "<option value='" + i + "'" + "class='tituloInfo Setor' selected>id " + json[i].idMaquina + "</option>"
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