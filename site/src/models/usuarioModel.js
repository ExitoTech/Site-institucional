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

function verificar(email){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function verificar: ", email)
    var instrucao = `
        SELECT * FROM funcionario WHERE Email = '${email}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function verificarCodigo(codigo){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function verificar código: ", codigo)
    var instrucao = `
        SELECT * FROM funcionario WHERE codigoRecuperacao = '${codigo}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function novaSenha(senha, codigo){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarCodigo", senha, codigo)
    var instrucao = `
        UPDATE funcionario SET senha = '${senha}' where codigoRecuperacao = '${codigo}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function mudarCpu(verCpu, idFuncionario){

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        if(verCpu == 1){
            verCpu = 1
        }else{
            verCpu = 0
        }
    }
    else{
        if(verCpu == true){
            verCpu = 1
        }else{
            verCpu = 0
        }
    }

    
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarCodigo", verCpu, idFuncionario)
    var instrucao = `
        UPDATE funcionario SET visualizarCpu = '${verCpu}' where idFuncionario = '${idFuncionario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function mudarDisco(verDisco, idFuncionario){

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        if(verDisco == 1){
            verDisco = 1
        }else{
            verDisco = 0
        }
    }
    else{
        if(verDisco == true){
            verDisco = 1
        }else{
            verDisco = 0
        }
    }

    
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarCodigo", verDisco, idFuncionario)
    var instrucao = `
        UPDATE funcionario SET visualizarDisco = ${verDisco} where idFuncionario = ${idFuncionario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function mudarRam(verRam, idFuncionario){

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        if(verRam == 1){
            verRam = 1
        }else{
            verRam = 0
        }
    }
    else{
        if(verRam == true){
            verRam = 1
        }else{
            verRam = 0
        }
    }

    
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarCodigo", verRam, idFuncionario)
    var instrucao = `
        UPDATE funcionario SET visualizarRam = '${verRam}' where idFuncionario = '${idFuncionario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function registrarCodigo(codigo, email){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarCodigo", codigo, email)
    var instrucao = `
        UPDATE funcionario SET codigoRecuperacao = '${codigo}' where email = '${email}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
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
function cadastrarEmpresa(nomeEmpresa,cepEmpresa,cnpj,porte,logradouro,uf, webHook) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeEmpresa);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO empresa (nomeEmpresa,cep,logradouro,uf,cnpj,porteempresa, webHook) VALUES ('${nomeEmpresa}','${cepEmpresa}','${logradouro}','${uf}','${cnpj}','${porte}', '${webHook}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function cadastrarUsuarioADM(nomeUsuario,email,senha,cpf,cepUsuario,telefoneUsuario,fk_empresa, qrCode) {

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
    Insert into Funcionario (nomeFuncionario,cpf,email,senha,ativo,telefoneFuncionario,cep,fk_empresa,isADM,visualizarCpu,visualizarDisco,visualizarRam, qrCode) VALUES ('${nomeUsuario}','${cpf}','${email}','${senha}', ${isTrue} ,'${telefoneUsuario}', '${cepUsuario}','${fk_empresa}',${isTrue},${isTrue},${isTrue},${isTrue}, ${qrCode});
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
        INSERT INTO funcionario (nomeFuncionario,cpf,email,senha,ativo,telefoneFuncionario,cep,fk_empresa,isADM,visualizarCpu,visualizarDisco,visualizarRam) VALUES ('${nome}','${cpf}','${email}','${senha}', ${isTrue} ,'${telefone}', '${cep}','${fk_empresa}',${isFalse},${isTrue},${isTrue},${isTrue});`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    entrar,
    cadastrarEmpresa,
    cadastrarUsuarioADM,
    getLastEmpresaId,
    listar,
    cadastrarFuncionario,
    verificar,
    verificarCodigo,
    registrarCodigo,
    novaSenha,
    mudarCpu,
    mudarDisco,
    mudarRam,
};