var rptRam = [];
var rptCpu = [];
var rptMaquina;

function validar(){
  trazerMaquina()

  setTimeout(function () {
    trazerRam(),
    trazerCpu()
  }, 100);
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

              rptRam.push(JSON.stringify(json))
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
              rptCpu.push(JSON.stringify(json))
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
  console.log(rptRam[0] + " Teste")
  console.log(rptCpu[0] + " Teste Cpu")
  /* var stringRam = JSON.stringify(rptRam).replace('{"":', '').replace('}', '');
  var integerRam = JSON.parse(stringRam)

  var stringCpu = JSON.stringify(rptCpu).replace('{"":', '').replace('}', '');
  var integerCpu = parseInt(stringCpu);

    for(let i = 0; i < rptMaquina.length; i++){
      console.log(JSON.stringify(rptMaquina[i]).replace('{"maquina":', '').replace('}', ''))
    }

    if(integerRam >= 1){
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