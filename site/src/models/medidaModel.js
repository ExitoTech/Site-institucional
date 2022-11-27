var database = require("../database/config");

function buscarUltimasMedidas(idMaquina) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        
        instrucaoSql = `select top 7 usoCPU,usoRam,usoDisco,dataHora ,CONVERT(varchar,dataHora,108) as data from capturas where fk_maquina = ${idMaquina} order by idCaptura desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `select usoCPU,usoRam,usoDisco,dataHora,DATE_FORMAT(dataHora,'%H:%i:%s') as data from capturas where fk_maquina = ${idMaquina} order by idCaptura desc limit 7`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idMaquina) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1 usoCPU,usoRam,usoDisco, dataHora ,CONVERT(varchar,dataHora,108) as data from capturas where fk_maquina = ${idMaquina} order by idCaptura desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `select usoCPU,usoRam,usoDisco,dataHora,DATE_FORMAT(dataHora,'%H:%i:%s') as data from capturas where fk_maquina = ${idMaquina} order by idCaptura desc limit 1`;
        
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
}
