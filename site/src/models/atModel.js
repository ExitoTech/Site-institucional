var database = require('../database/config')

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function verificarCaptura(idMaquina, idCaptura) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    idMaquina,
    idCaptura
  )

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucao = `
  select ${idCaptura} from capturas where dataHora >= '2022-0${mes_atual}-${dia_inicio} and fk_maquina = ${idMaquina};

    `

  console.log('Executando a instrução SQL: \n' + instrucao)
  return database.executar(instrucao)
}

function atualizarMaquina(statusMaquina, idMaquina) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    statusMaquina,
    idMaquina
  )

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  if (statusMaquina == 'ativada') {
    var instrucao = `
        UPDATE maquina SET statusMaquina = '${statusMaquina}' WHERE idMaquina = '${idMaquina}'
    `
  }
  console.log('Executando a instrução SQL: \n' + instrucao)
  return database.executar(instrucao)
}

module.exports = {
  verificarCaptura,
  atualizarMaquina
}
