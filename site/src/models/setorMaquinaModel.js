var database = require("../database/config")

function cadastrarMaquina(fk_setor){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO maquina(nomeMaquina,fk_setor,sistemaOperacional,statusmaquina,arquiteturaSO,processador,memoriaRam,memoriaMassa) VALUES (null,${fk_setor},null,'desativado',null,null,null,null);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

function cadastrarSetor(setor, fk_empresa){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO setor(nomeSetor,fk_empresa) VALUES ('setor ${setor}', ${fk_empresa});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function getSetor(setor,fk_empresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")

        var instrucao = `
        Select * from setor where nomeSetor = 'setor ${setor}' and fk_empresa = ${fk_empresa};`;
    
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
    

}

function getFkSetor(setor,fk_empresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")

        var instrucao = `
        Select idSetor from setor where nomeSetor = 'setor ${setor}' and fk_empresa = ${fk_empresa};`;
    
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
    

}

function getAllSetor(fk_empresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    

        var instrucao = `
        select nomeSetor from setor where fk_empresa = ${fk_empresa} order by nomeSetor asc; `;
    
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
    

}

function getLastMaquinaId() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    
    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        var instrucao = `
        SELECT idMaquina FROM maquina ORDER BY idMaquina DESC LIMIT 1;`;
    
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
    }
    else if (process.env.AMBIENTE_PROCESSO == "producao") {
        var instrucao = `
        Select idMaquina from maquina order by idMaquina desc offset 0 rows fetch first 1 rows only`;
    
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
    }
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
    cadastrarSetor,
    cadastrarMaquina,
    getLastMaquinaId,
    getFkSetor,
    getSetor,
    getAllSetor,
    getMachinePerSector,
    getHardInfo
}