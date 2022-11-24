var express = require('express')
var router = express.Router()

var atController = require('../controllers/atController')

router.post('/verificarCaptura', function (req, res) {
  atController.verificarCaptura(req, res)
})

router.post('/atualizarMaquina', function (req, res) {
  atController.atualizarMaquina(req, res)
})

module.exports = router