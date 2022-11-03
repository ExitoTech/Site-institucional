var database = require("../database/config");

function buscarUltimasMedidas(idMaquina) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        
        instrucaoSql = `select top 7 usoCPU,usoRam, dataHora ,CONVERT(varchar,dataHora,108) as data from capturas where fk_maquina = ${idMaquina} order by idCaptura desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `select usoCPU,usoRam,dataHora,DATE_FORMAT(momento,'%H:%i:%s') as data from capturas where fk_maquina = ${idMaquina} order by id desc limit 7`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idMaquina) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1 usoCPU,usoRam, dataHora ,CONVERT(varchar,dataHora,108) as data from capturas where fk_maquina = ${idMaquina} order by idCaptura desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `select usoCPU,usoRam,dataHora,DATE_FORMAT(momento,'%H:%i:%s') as data from capturas where fk_maquina = ${idMaquina} order by id desc limit 1`;
        
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function getMachinePerSector(setor,fk_empresa){

    instrucaoSql = `select idMaquina from setor as s 
    join maquina as m on
    m.fk_setor = s.idSetor where fk_empresa = ${fk_empresa} and nomeSetor = 'setor${setor}' order by idMaquina`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function getHardInfo(maquina){

    instrucaoSql = `select * from maquina where idMaquina = ${maquina}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    getMachinePerSector,
    getHardInfo

}
