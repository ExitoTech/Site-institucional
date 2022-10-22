var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM Empresa;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM funcionario WHERE Email = '${email}' AND Senha = '${senha}';
    `;
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

function getLastEmpresaId() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    
    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    var instrucao = `
    Select idempresa from empresa order by idEmpresa desc Limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
    }
    else if (process.env.AMBIENTE_PROCESSO == "producao") {
        var instrucao = `
        Select idempresa from empresa order by idEmpresa desc offset 0 rows fetch first 1 rows only`;
    
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
    }

}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarEmpresa(nomeEmpresa,cepEmpresa,cnpj,porte,logradouro,uf) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeEmpresa);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO empresa (nomeEmpresa,cep,logradouro,uf,cnpj,porteempresa) VALUES ('${nomeEmpresa}','${cepEmpresa}','${logradouro}','${uf}','${cnpj}','${porte}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function cadastrarUsuarioADM(nomeUsuario,email,senha,cpf,cepUsuario,telefoneUsuario,fk_empresa) {

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        var isTrue = true
        var isFalse = false
    }
    else{
        var isTrue = 1
        var isFalse = 0
    }

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeUsuario, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    Insert into Funcionario (nomeFuncionario,cpf,email,senha,ativo,telefoneFuncionario,cep,fk_empresa,isADM) VALUES ('${nomeUsuario}','${cpf}','${email}','${senha}', ${isTrue} ,'${telefoneUsuario}', '${cepUsuario}','${fk_empresa}',${isTrue});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarMaquina(){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO maquina(nomeMaquina,fk_setor,sistemaOperacional,arquiteturaSO,processador,memoriaRam,memoriaMassa) VALUES (null,null,null,null,null,null,null);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

function cadastrarFuncionario(nome,cpf,email,senha,telefone,cep,fk_empresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome,cpf,email,senha,telefone,cep,fk_empresa);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.


    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        var isTrue = true
        var isFalse = false
    }
    else{
        var isTrue = 1
        var isFalse = 0
    }

    var instrucao = `
        INSERT INTO funcionario (nomeFuncionario,cpf,email,senha,ativo,telefoneFuncionario,cep,fk_empresa,isADM) VALUES ('${nome}','${cpf}','${email}','${senha}', ${isTrue} ,'${telefone}', '${cep}','${fk_empresa}',${isFalse});`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrarEmpresa,
    cadastrarUsuarioADM,
    getLastEmpresaId,
    getLastMaquinaId,
    listar,
    cadastrarMaquina,
    cadastrarFuncionario
};