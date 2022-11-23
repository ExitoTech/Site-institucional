var database = require("../database/config")

function trazerRam() {
    var instrucao;

    if(process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        instrucao = `
        SELECT truncate(avg(mediaRam), 0) FROM aviso WHERE idAviso in (Select * from(SELECT idAviso FROM aviso ORDER BY idAviso DESC limit 5) as t1);
        `;
    }else if(process.env.AMBIENTE_PROCESSO == "producao"){
        instrucao= `
        SELECT avg(mediaRam) FROM aviso WHERE idAviso in (SELECT TOP 5 idAviso FROM aviso ORDER BY idAviso DESC);
        `
    }else{
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
    }


    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
    console.log("Chegamos no model!");
}

function trazerCpu() {
    var instrucao;

    if(process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        instrucao = `
        SELECT truncate(avg(mediaCpu), 0) FROM aviso WHERE idAviso in (Select * from(SELECT idAviso FROM aviso ORDER BY idAviso DESC limit 5) as t1);
        `;
    }else if(process.env.AMBIENTE_PROCESSO == "producao"){
        instrucao= `
        SELECT avg(mediaCpu) FROM aviso WHERE idAviso in (SELECT TOP 5 idAviso FROM aviso ORDER BY idAviso DESC);
        `
    }else{
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
    }


    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
    console.log("Chegamos no model!");
}

function trazerMaquina() {
    var instrucao;

    if(process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        instrucao = `
        select fk_maquina as maquina
        from aviso as av
        join maquina as ma
        on av.fk_maquina = ma.idMaquina
        left join setor as se
        on ma.fk_setor = se.idSetor
        order by idAviso desc limit 1;
        `;
    }else if(process.env.AMBIENTE_PROCESSO == "producao"){
        instrucao= `
        select top 1 fk_maquina as maquina
        from aviso as av
        join maquina as ma
        on av.fk_maquina = ma.idMaquina
        join setor as se
        on ma.fk_setor = se.idSetor
        order by idAviso desc;
        `
    }else{
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
    }


    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
    console.log("Chegamos no model!");
}

module.exports = {
    trazerRam,
    trazerCpu,
    trazerMaquina
};