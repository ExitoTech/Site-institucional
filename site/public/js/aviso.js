var rptRam = [];
var rptCpu = [];
var rptMaquina;

function validar(){
  trazerMaquina()

  setTimeout(function () {
    trazerRam(),
    trazerCpu()
  }, 150);
}

function trazerRam(){
  for(i = 0; i < rptMaquina.length; i++){

    fetch("/aviso/trazerRam", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          maquinaServer: JSON.stringify(rptMaquina[i]).replace('{"maquina":', ''). replace('}', ''),
          fk_empresaServer: sessionStorage.FK_EMPRESA,
      }),
  })
      .then(function (resposta) {
          if (resposta.ok) {
            resposta.json().then((json) => {
                      
              /* console.log(json);
              console.log(JSON.stringify(json)); */

              rptRam.push(json)
            });
          } else {
              console.log("Houve um erro ao tentar o select!");
          }
      })
      .catch(function (erro) {
          console.log(erro);
      });
  }
}

function trazerCpu(){
  for(i = 0; i < rptMaquina.length; i++){

    fetch("/aviso/trazerCpu", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          maquinaServer: JSON.stringify(rptMaquina[i]).replace('{"maquina":', ''). replace('}', ''),
          fk_empresaServer: sessionStorage.FK_EMPRESA,
      }),
  })
      .then(function (resposta) {
          if (resposta.ok) {
            resposta.json().then((json) => {
                      
              /* console.log(json);
              console.log(JSON.stringify(json)); */
              rptCpu.push(json)
            });
          } else {
              console.log("Houve um erro ao tentar o select!");
          }
      })
      .catch(function (erro) {
          console.log(erro);
      });
  }

  setTimeout(function (){
    exibirAviso()
  }, 100)
}

function trazerMaquina(){
  fetch("/aviso/trazerMaquina", {
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
            console.log(JSON.stringify(json));
            rptMaquina = json
          });
        } else {
            console.log("Houve um erro ao tentar o select!");
        }
    })
    .catch(function (erro) {
        console.log(erro);
    });
}

function exibirAviso(){
  if(rptRam != null){
    for(let i = 0; i < rptRam.length; i++){
      var integerRam = parseInt(JSON.stringify(rptRam[i]).replace('[{"":', '').replace('}]', '')); 
      var integerCpu = parseInt(JSON.stringify(rptCpu[i]).replace('[{"":', '').replace('}]', ''));
      
      console.log("RAM: " + integerRam)
      console.log("CPU: " + integerCpu)
      if(integerRam > 70){
        document.getElementById('aviso').innerHTML += `
        <p>
        A máquina  apresentou uso elevado da memória RAM.
        <br><br><span style="font-weight: bold;">Uso da memória RAM: <span style="color: red;">${integerRam}%</span></span>
        </p>
        `
      }

      if(integerCpu > 70){
        document.getElementById('aviso').innerHTML += `
        <p>
        A máquina  apresentou uso elevado da memória RAM.
        <br><br><span style="font-weight: bold;">Uso da CPU: <span style="color: red;">${integerCpu}%</span></span>
        </p>
        `
      }
    }
  }
    /* if(integerRam >= 1){
      txtAviso1.innerHTML = `A máquina  apresentou uso elevado da memória RAM.
      <br><br><span style="font-weight: bold;">Uso da memória RAM: <span style="color: red;">${integerRam}%</span></span>`

      emojiAlerta1.innerHTML = "&#x26A0;&#xFE0F;"
      emojiAlerta2.innerHTML = "&#x26A0;&#xFE0F;"
      
      alertas.style.boxShadow = "1px 3px 30px red"
    }

    if(integerCpu >= 75){
      txtAviso2.innerHTML = `A máquina  apresentou uso elevado da CPU.
      <br><br><span style="font-weight: bold;">Uso da CPU: <span style="color: red;">${integerCpu}%</span></span>`

      emojiAlerta1.innerHTML = "&#x26A0;&#xFE0F;"
      emojiAlerta2.innerHTML = "&#x26A0;&#xFE0F;"

      alertas.style.boxShadow = "1px 3px 30px red"
    } */
}