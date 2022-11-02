var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {


    var idMaquina = req.params.idMaquina;


    medidaModel.buscarUltimasMedidas(idMaquina).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    var idMaquina = req.params.idMaquina;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idMaquina).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function getMachinePerSector(req, res) {

    var fk_empresa = req.body.fkEmpresaServer
    var setor = req.body.setorServer

    if(setor == undefined){
        res.status(400).send("Seu setor está como undefined!");
    }else if(fk_empresa == undefined){
        res.status(400).send("Sua fk_Empresa está como undefined!")
    }else{
        medidaModel.getMachinePerSector(setor,fk_empresa)
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
        medidaModel.getHardInfo(maquina)
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


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    getMachinePerSector,
    getHardInfo

}