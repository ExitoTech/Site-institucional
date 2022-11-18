var express = require("express");
var router = express.Router();

var pesquisaMaquinaController = require("../controllers/pesquisaMaquinaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/pesquisaMaquina", function (req, res) {
    pesquisaMaquinaController.pesquisaMaquina(req, res);
})

router.post("/statusMaquina", function (req, res) {
    pesquisaMaquinaController.statusMaquina(req, res);
})



module.exports = router;