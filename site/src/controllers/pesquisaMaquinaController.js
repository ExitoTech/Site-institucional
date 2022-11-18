var pesquisaMaquinaModel = require("../models/pesquisaMaquinaModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}


function pesquisaMaquina(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var numeroMaquina = req.body.numeroMaquinaServer;

    // Faça as validações dos valores
    if (numeroMaquina == undefined) {
        res.status(400).send("Seu numero de pesquisa está está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        pesquisaMaquinaModel.pesquisaMaquina(numeroMaquina)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o pesquisa! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function statusMaquina(req, res) {
    console.log("ENTRAMOS NA usuarioController");

    if (undefined) {
        res.status(400).send("Seu numero de pesquisa está está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        pesquisaMaquinaModel.statusMaquina()
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o pesquisa! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    testar,
    pesquisaMaquina,
    statusMaquina,
}