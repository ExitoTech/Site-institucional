var rptRam = [];
var rptCpu = [];
var maquinaRam = [];
var maquinaCpu = [];
var rptMaquina;

function validar(){
  trazerMaquina()

  console.log("Esotu no aviso")

  setTimeout(function () {
    trazerRam(),
    trazerCpu()
  }, 100);
  setTimeout(function(){
    validar()
  }, 3000)
}

function trazerRam(){
  for(let i = 0; i < rptMaquina.length; i++){

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
              maquinaRam.push(rptMaquina[i])
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
  for(let i = 0; i < rptMaquina.length; i++){
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
              maquinaCpu.push(rptMaquina[i])
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
  }, 150)
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
  var aviso = document.getElementById('aviso');
  if(rptRam != null){
    for(let i = 0; i < rptRam.length; i++){
      var integerRam = parseInt(JSON.stringify(rptRam[i]).replace('[{"":', '').replace('}]', '')); 
      var integerCpu = parseInt(JSON.stringify(rptCpu[i]).replace('[{"":', '').replace('}]', ''));
      
      var maquinaRamFormata = JSON.stringify(maquinaRam[i]).replace('{"maquina":', '').replace('}', '');
      var maquinaCpuFormata = JSON.stringify(maquinaCpu[i]).replace('{"maquina":', '').replace('}', '');

      console.log("RAM: " + integerRam + " Máquina: " + maquinaRamFormata)
      console.log("CPU: " + integerCpu + " Máquina: " + maquinaCpuFormata)
      if(integerRam > 70){
        aviso.innerHTML = "";
        console.log("teste ram")
        aviso.innerHTML += `
        <p>
        A máquina <b>${maquinaRamFormata}</b> apresentou uso elevado da memória RAM.
        <br><br><span style="font-weight: bold;">Uso da memória RAM: <span style="color: red;">${integerRam}%</span></span>
        </p>
        `
      }

      if(integerCpu > 70){
        aviso.innerHTML += `
        <p>
        A máquina <b>${maquinaCpuFormata}</b> apresentou uso elevado da CPU.
        <br><br><span style="font-weight: bold;">Uso da CPU: <span style="color: red;">${integerCpu}%</span></span>
        </p>
        `
      }
    }
  }
}