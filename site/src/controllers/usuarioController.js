var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function getLastMaquinaId(req, res) {

        usuarioModel.getLastMaquinaId()
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

    usuarioModel.getLastEmpresaId()
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




function cadastrarUsuarioADM(req, res) {
    var nomeUsuario = req.body.nomeServer
    var email = req.body.emailServer
    var senha = req.body.senhaServer
    var cpf = req.body.cpfUsuarioServer
    var cepUsuario = req.body.cepUsuarioServer
    var telefoneUsuario = req.body.telefoneUsuarioServer
    var fk_empresa = req.body.fk_empresaServer


    if (nomeUsuario == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (cpf == undefined) {
        res.status(400).send("Seu cpf está undefined!");
    } else if (cepUsuario == undefined) {
        res.status(400).send("Seu cepUsuario está undefined!");
    } else if (telefoneUsuario == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else if (fk_empresa == undefined) {
        res.status(400).send("Sua fk_empresa está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarUsuarioADM(nomeUsuario, email, senha, cpf, cepUsuario, telefoneUsuario, fk_empresa)
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

function cadastrarEmpresa(req,res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var nomeEmpresa = req.body.nomeEmpresaServer;
    var cepEmpresa = req.body.cepEmpresaServer;
    var cnpj = req.body.cnpjEmpresaServer;
    var porte = req.body.porteEmpresaServer;
    var logradouro = req.body.ruaEmpresaServer;
    var uf = req.body.ufEmpresaServer;

    // Faça as validações dos valores
    if (nomeEmpresa == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (cepEmpresa == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("Sua cnpj está undefined!");
    } else if (porte == undefined) {
        res.status(400).send("Sua porte está undefined!");
    } else if (logradouro == undefined) {
        res.status(400).send("Seu logradouro está undefined!");
    } else if (uf == undefined) {
        res.status(400).send("Seu UF está undefined!");
    } else {


        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarEmpresa(nomeEmpresa, cepEmpresa, cnpj, porte, logradouro, uf)
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

function cadastrarMaquina(req, res) {
    // Faça as validações dos valores {
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js       
    usuarioModel.cadastrarMaquina().then(
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
function cadastrarFuncionario(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html


    var nome = req.body.nomeServer;
    var cpf = req.body.cpfServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var telefone = req.body.telefoneServer;
    var cep = req.body.cepServer;
    var fk_empresa = req.body.fk_empresa;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (cpf == undefined) {
        res.status(400).send("Seu cpf está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else if (fk_empresa == undefined) {
        res.status(400).send("sua fk_empresa esta undefined!")
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarFuncionario(nome, cpf, email, senha, telefone, cep, fk_empresa)
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
    entrar,
    cadastrarUsuarioADM,
    cadastrarEmpresa,
    getLastEmpresaId,
    getLastMaquinaId,
    listar,
    testar,
    cadastrarMaquina,
    cadastrarFuncionario
}