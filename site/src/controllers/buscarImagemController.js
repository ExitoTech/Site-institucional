var buscarImagemModel = require("../models/buscarImagemModel");

var sessoes = [];

function buscarImagem(req, res) {
        buscarImagemModel.buscarImagem()
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao buscar imagem! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


module.exports = {
    buscarImagem,
}