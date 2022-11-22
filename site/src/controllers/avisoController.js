var avisoModel = require("../models/avisoModel");

function trazer(req, res) {
    const limite_linhas = 1;

    console.log(`Recuperando os últimos ${limite_linhas} avisos`);

    avisoModel.trazer(limite_linhas).then(function (resultado) {
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

module.exports = {
    trazer
}