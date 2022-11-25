var problemasCorrigidosModel = require("../models/problemasCorrigidosModel");

var sessoes = [];

function sendCorretion(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var problemaCorrigido = req.body.problemaCorrigidoServer;
    var autorMaquinaCorrigida = req.body.nomeAutorServer;
    var idMaquina = req.body.idMaquinaServer

    // Faça as validações dos valores
    if (problemaCorrigido == undefined) {
        res.status(400).send("Seu problemaCorrigido está undefined!");
    } else if (autorMaquinaCorrigida == undefined) {
        res.status(400).send("Seu autorMaquinaCorrigida está undefined!");
    }else if(idMaquina == undefined){
        res.status(400).send("Seu idMaquina está undefined!");
    }else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        problemasCorrigidosModel.sendCorretion(problemaCorrigido, autorMaquinaCorrigida,idMaquina)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao reportar este incidente! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    sendCorretion,
}