var setorMaquinaModel = require("../models/setorMaquinaModel");


function cadastrarMaquina(req, res) {
    // Faça as validações dos valores {
    // Passe os valores como parâmetro e vá para o arquivo setorMaquinaModel.js       
    var setor = req.body.setorServer;

    if(setor == undefined){
        res.status(400).send("Seu setor está como undefined!");
    }else{
    setorMaquinaModel.cadastrarMaquina(setor)
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
    }

}

function cadastrarSetor(req, res) {
    // Faça as validações dos valores {
    // Passe os valores como parâmetro e vá para o arquivo setorMaquinaModel.js       
    var setor = req.body.setorServer;
    var fk_empresa = req.body.fk_empresaServer;

    if(setor == undefined){
        res.status(400).send("Seu setor está como undefined!");
    }else if(fk_empresa == undefined){
        res.status(400).send("Sua fk_Empresa está como undefined!")
    }else{

    setorMaquinaModel.cadastrarSetor(setor,fk_empresa)
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
    }

}

function getMachinePerSector(req, res) {

    var fk_empresa = req.body.fkEmpresaServer
    var setor = req.body.setorServer

    if(setor == undefined){
        res.status(400).send("Seu setor está como undefined!");
    }else if(fk_empresa == undefined){
        res.status(400).send("Sua fk_Empresa está como undefined!")
    }else{
        setorMaquinaModel.getMachinePerSector(setor,fk_empresa)
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    res.json(resultado);
                
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao pegar o ID Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function getHardInfo(req, res) {

    var maquina = req.body.maquinaServer

    if(maquina == undefined){
        res.status(400).send("Seu maquina está como undefined!");
    }else{
        setorMaquinaModel.getHardInfo(maquina)
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    res.json(resultado);
                
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao pegar o ID Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}


function getSetor(req, res) {

    var setor = req.body.setorServer
    var fk_empresa = req.body.fk_empresaServer

    if(setor == undefined){
        res.status(400).send("Seu setor está como undefined!");
    }else if(fk_empresa == undefined){
        res.status(400).send("Sua fk_Empresa está como undefined!")
    }else{
        setorMaquinaModel.getSetor(setor,fk_empresa)
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    res.json(resultado);
                
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao pegar o ID Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function getFkSetor(req, res) {

    var setor = req.body.setorServer
    var fk_empresa = req.body.fk_empresaServer

    if(setor == undefined){
        res.status(400).send("Seu setor está como undefined!");
    }else if(fk_empresa == undefined){
        res.status(400).send("Sua fk_Empresa está como undefined!")
    }else{
        setorMaquinaModel.getFkSetor(setor,fk_empresa)
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    res.json(resultado);
                
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao pegar o ID Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function getAllSetor(req, res) {

    setorMaquinaModel.getAllSetor()
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    res.json(resultado);
                
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao pegar o ID Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function getLastMaquinaId(req, res) {

    setorMaquinaModel.getLastMaquinaId()
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    res.json(resultado[0]);
                
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao pegar o ID Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function getLastEmpresaId(req, res) {

setorMaquinaModel.getLastEmpresaId()
    .then(
        function (resultado) {
            console.log(`\nResultados encontrados: ${resultado.length}`);
            console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                res.json(resultado[0]);
            
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao pegar o ID Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    cadastrarSetor,
    cadastrarMaquina,
    getMachinePerSector,
    getHardInfo,   
    getLastEmpresaId,
    getLastMaquinaId,
    getFkSetor,
    getSetor,
    getAllSetor,
}