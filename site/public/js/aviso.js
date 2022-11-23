var rptRam;
var rptCpu;
var rptMaquina;

function trazerRam(){
fetch(`/aviso/trazerRam/`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (resposta) {
        /* console.log(`Dados recebidos: ${JSON.stringify(resposta)}`); */
        resposta.reverse();

        rptRam = JSON.stringify(resposta[0]).replace('{"":', "").replace('}', '');
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
    fetch(`/aviso/trazerMaquina/`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
          response.json().then(function (resposta) {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
            resposta.reverse();
    
            rptMaquina = resposta[0]
          });
        } else {
          console.error('Nenhum dado encontrado ou erro na API');
        }
      })
        .catch(function (error) {
          console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });

        setTimeout(function () {
          exibirAviso()
      }, 100);
}

function exibirAviso(){
  
  /* if(rptRam == undefined){
    alert("está indefinido")
  }else{
    alert("tudo certo")
  } */
  
  var stringRam = JSON.stringify(rptRam).replace('{"":', '').replace('}', '');
  var integerRam = JSON.parse(stringRam)

  var stringCpu = JSON.stringify(rptCpu).replace('{"":', '').replace('}', '');
  var integerCpu = parseInt(stringCpu);

  var stringMaquina = JSON.stringify(rptMaquina).replace('{"maquina":', '').replace('}', '')

  if(integerCpu < 75 && integerRam < 75){
    txtAviso1.innerHTML = "<span style='font-size: 1.7rem'>Está tudo certo com suas máquinas!	&#128521;</span>"
  }else{
    if(integerRam >= 75){
      txtAviso1.innerHTML = `A máquina ${stringMaquina} apresentou uso elevado da memória RAM.
      <br><br><span style="font-weight: bold;">Uso da memória RAM: <span style="color: red;">${integerRam}</span></span>`

      emojiAlerta.innerHTML = "&#x26A0;&#xFE0F;"

      alertas.style.boxShadow = "1px 3px 30px red"
    }

    if(integerCpu >= 75){
      txtAviso2.innerHTML = `A máquina ${stringMaquina} apresentou uso elevado da CPU.
      <br><br><span style="font-weight: bold;">Uso da CPU: <span style="color: red;">${integerCpu}</span></span>`
    }
  }
}

/* function teste(){
  var stringRam = JSON.stringify(rptRam).replace('{"":', '').replace('}', '');
  var integerRam = JSON.parse(stringRam)

  var stringCpu = JSON.stringify(rptCpu).replace('{"":', '').replace('}', '');
  var integerCpu = parseInt(stringCpu);

  var stringMaquina = JSON.stringify(rptMaquina).replace('{"maquina":', '').replace('}', '')

  alert(integerRam / 2)
} */