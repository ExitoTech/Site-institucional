var database = require("../database/config")



function pesquisaMaquina(numeroMaquina) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",numeroMaquina)
    var instrucao = `
          SELECT sistemaOperacional, idMaquina FROM maquina WHERE idMaquina ='${numeroMaquina}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    pesquisaMaquina,
};