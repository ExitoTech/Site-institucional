var database = require("../database/config")



function pesquisaMaquina(numeroMaquina) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", numeroMaquina)
    var instrucao = `
    SELECT sistemaOperacional, idMaquina, arquiteturaSO, nomeSetor, CEP,CONVERT(varchar, horasTrabalhadas, 108) as horasTrabalhadas FROM maquina 
    LEFT JOIN setor ON idSetor = fk_setor 
    LEFT JOIN bancoDeHora ON fk_maquina = idMaquina
    LEFT JOIN empresa ON idEmpresa = fk_empresa WHERE idMaquina = '${numeroMaquina}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function statusMaquina(fk_empresa, setor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisar(): ")
    var instrucao = `
    select * from maquina
    join setor
    on fk_setor = idSetor
    join empresa
    on fk_empresa = idEmpresa
    where nomeSetor = 'setor ${setor}' and idEmpresa= '${fk_empresa}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    pesquisaMaquina,
    statusMaquina,
};