var atModel = require('../models/atModel')

function buscarMaquinasAtivas(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    atModel.buscarMaquinasAtivas()
      .then(function (resultado) {
        res.json(resultado)
      })
      .catch(function (erro) {
        console.log(erro)
        console.log(
          '\nHouve um erro ao realizar o cadastro! Erro: ',
          erro.sqlMessage
        )
        res.status(500).json(erro.sqlMessage)
      })
  
}

function verificarCaptura(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
      
  var idMaquina = req.body.fkMaquina

  // Faça as validações dos valores
  if (idMaquina == undefined) {
    res.status(400).send('atualizacao está undefined!')
  } else {
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    atModel
      .verificarCaptura(idMaquina)
      .then(function (resultado) {
        res.json(resultado)
      })
      .catch(function (erro) {
        console.log(erro)
        console.log(
          '\nHouve um erro ao realizar o cadastro! Erro: ',
          erro.sqlMessage
        )
        res.status(500).json(erro.sqlMessage)
      })
  }
}

module.exports = {
  verificarCaptura,
  buscarMaquinasAtivas
}
