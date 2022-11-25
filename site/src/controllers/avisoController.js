var avisoModel = require("../models/avisoModel");

function trazerRam(req, res) {
    var maquina = req.body.maquinaServer
    var empresa = req.body.fk_empresaServer

    console.log(`Recuperando os últimos  avisos`);

    avisoModel.trazerRam(empresa, maquina).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os últimos avisos.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function trazerCpu(req, res) {
    var maquina = req.body.maquinaServer
    var empresa = req.body.fk_empresaServer

    console.log(`Recuperando os últimos avisos`);

    avisoModel.trazerCpu(empresa, maquina).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os últimos avisos.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function trazerMaquina(req, res) {
    var fk_empresa = req.body.fk_empresaServer

    avisoModel.trazerMaquina(fk_empresa)
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

module.exports = {
    trazerRam,
    trazerCpu,
    trazerMaquina
}