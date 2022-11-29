var database = require("../database/config")

function mostrarCorrecoes(empresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");


    var instrucao = `
    SELECT tituloIncidente,nomeAutor,horaAtendimento,fk_maquina,fk_setor
    FROM atendimentoMaquina as am
    join funcionario as fu
    on am.fk_funcionario = fu.idFuncionario
    join empresa as em
    on fu.fk_Empresa = em.idEmpresa
    where idEmpresa = ${empresa}
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    mostrarCorrecoes
};