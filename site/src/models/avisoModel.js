var database = require("../database/config")

function trazerRam(empresa, maquina) {
    var instrucao;

    if(process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        instrucao = `
        SELECT truncate(avg(usoRam),0) as mediaRam
        FROM capturas as ca
        join maquina as ma
        on ca.fk_maquina = ma.idMaquina
        left join setor as se
        on ma.fk_setor = se.idSetor
        left join empresa as em
        on se.fk_Empresa = em.idEmpresa
        WHERE idCaptura in 
        (Select * from(SELECT idCaptura FROM capturas where fk_maquina = ${maquina} ORDER BY idCaptura DESC limit 5) as t1);
        `;
    }else if(process.env.AMBIENTE_PROCESSO == "producao"){
        instrucao= `
        SELECT avg(usoRam) 
        FROM capturas as ca
        join maquina as ma
        on ca.fk_maquina = ma.idMaquina
        join setor as se
        on ma.fk_setor = se.idSetor
        join empresa as em
        on se.fk_Empresa = em.idEmpresa
        WHERE ca.idCaptura 
        in (SELECT TOP 5 idCaptura FROM capturas WHERE fk_maquina = ${maquina}
        ORDER BY idCaptura DESC)
        and em.idEmpresa = ${empresa}
        and ma.statusMaquina = 'ativado';
        `
    }else{
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
    }


    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
    console.log("Chegamos no model!");
}

function trazerCpu(empresa, maquina) {
    var instrucao;

    if(process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        instrucao = `
        SELECT truncate(avg(usoCpu),0) as mediaRam
        FROM capturas as ca
        join maquina as ma
        on ca.fk_maquina = ma.idMaquina
        left join setor as se
        on ma.fk_setor = se.idSetor
        left join empresa as em
        on se.fk_Empresa = em.idEmpresa
        WHERE idCaptura in 
        (Select * from(SELECT idCaptura FROM capturas where fk_maquina = ${maquina} ORDER BY idCaptura DESC limit 5) as t1);
        `;
    }else if(process.env.AMBIENTE_PROCESSO == "producao"){
        instrucao= `
        SELECT avg(usoCpu) 
        FROM capturas as ca
        join maquina as ma
        on ca.fk_maquina = ma.idMaquina
        join setor as se
        on ma.fk_setor = se.idSetor
        join empresa as em
        on se.fk_Empresa = em.idEmpresa
        WHERE ca.idCaptura 
        in (SELECT TOP 5 idCaptura FROM capturas WHERE fk_maquina = ${maquina}
        ORDER BY idCaptura DESC)
        and em.idEmpresa = ${empresa};
        `
    }else{
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
    }


    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
    console.log("Chegamos no model!");
}

function trazerMaquina(fk_empresa) {
    var instrucao;

    if(process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        instrucao = `
        select idMaquina as maquina
        from maquina as ma
        join setor as se 
        on ma.fk_setor = se.idSetor
        join empresa as em
        on se.fk_Empresa = em.idEmpresa
        where em.idEmpresa =  
        group by ma.idMaquina
        `;
    }else if(process.env.AMBIENTE_PROCESSO == "producao"){
        instrucao= `
        select idMaquina as maquina
        from maquina as ma
        join setor as se 
        on ma.fk_setor = se.idSetor
        join empresa as em
        on se.fk_Empresa = em.idEmpresa
        where em.idEmpresa = ${fk_empresa}
        group by ma.idMaquina
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