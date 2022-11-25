var mostrarCorrecoesModel = require("../models/mostrarCorrecoesModel");

var sessoes = [];

function mostrarCorrecoes(req, res) {

    mostrarCorrecoesModel.mostrarCorrecoes()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao carregar os incidentes! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    mostrarCorrecoes,
}