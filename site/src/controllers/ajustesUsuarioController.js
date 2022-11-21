var ajustesUsuarioModel = require("../models/ajustesUsuarioModel");

var sessoes = [];


function cadastrarImagem(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var imagem = req.body.imagemFuncServer;
    var email = req.body.emailServer

    // Faça as validações dos valores
    if (imagem == undefined || email == undefined) {
        res.status(400).send("Sua imagem está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        ajustesUsuarioModel.cadastrarImagem(imagem)
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

module.exports = {
    cadastrarImagem,

}