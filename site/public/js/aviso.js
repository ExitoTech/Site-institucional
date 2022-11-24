var rptRam;
var rptCpu;
var rptMaquina;

function validar(){
  trazerCpu(),
  trazerRam(),
  trazerMaquina()

  setTimeout(function () {
    if(rptRam != undefined && rptCpu != undefined){
      console.log("Chamou aviso!")
      exibirAviso()
    }else{
      console.log("Ram e/ou Cpu estão undefined")
    }
  }, 150);
}

function trazerRam(){
fetch(`/aviso/trazerRam/`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (resposta) {
        console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
        resposta.reverse();

        rptRam = resposta[0]
      });
    } else {
      console.error('Nenhum dado encontrado ou erro na API');
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

function trazerCpu(){
  fetch(`/aviso/trazerCpu/`, { cache: 'no-store' }).then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
          resposta.reverse();
  
          rptCpu = resposta[0]
        });
      } else {
        console.error('Nenhum dado encontrado ou erro na API');
      }
    })
      .catch(function (error) {
        console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
      });
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
  var stringRam = JSON.stringify(rptRam).replace('{"":', '').replace('}', '');
  var integerRam = JSON.parse(stringRam)

  var stringCpu = JSON.stringify(rptCpu).replace('{"":', '').replace('}', '');
  var integerCpu = parseInt(stringCpu);

  for(let i = 0; i < rptMaquina.length; i++){
    console.log(JSON.stringify(rptMaquina[i]).replace('{"maquina":', '').replace('}', ''))
  }

  if(integerCpu < 0 && integerRam < 0){
    txtAviso1.innerHTML = "<span style='font-size: 1.7rem'>Está tudo certo com suas máquinas!	&#128521;</span>"
  }else{
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
    }
  }
}