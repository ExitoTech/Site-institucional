var database = require("../database/config")

function trazer() {
    var instrucao;

    if(process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        instrucao = `
        SELECT truncate(avg(mediaRam), 0) FROM aviso WHERE idAviso in (Select * from(SELECT idAviso FROM aviso ORDER BY idAviso DESC limit 5) as t1);
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

module.exports = {
    trazer
};