var database = require('../database/config')

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function verificarCaptura(idMaquina) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    idMaquina
  )

  instrucaoSql = ''

  if (process.env.AMBIENTE_PROCESSO == "producao") {
      instrucaoSql = `SELECT top 1 convert(varchar,dataHora,108) as 'dataHora', idCaptura as 'Capturas' FROM capturas WHERE fk_maquina = ${idMaquina} ORDER BY idCaptura DESC`;

  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

      instrucaoSql = `
      SELECT DATE_FORMAT(dataHora,'%H:%i:%s') as 'dataHora', idCaptura as 'Capturas' FROM capturas WHERE fk_maquina = ${idMaquina} ORDER BY idCaptura DESC LIMIT 1 
     `;

  } else {
      console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function  buscarMaquinasAtivas() {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():"
  )

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucao = `
  select idMaquina from maquina where statusMaquina = 'ativado';`

  console.log('Executando a instrução SQL: \n' + instrucao)
  return database.executar(instrucao)
}



module.exports = {
  verificarCaptura,
  buscarMaquinasAtivas
}
