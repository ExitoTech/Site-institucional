var express = require("express");
var router = express.Router();

var problemasCorrigidosController = require("../controllers/problemasCorrigidosController");

router.get("/", function (req, res) {
    problemasCorrigidosController.testar(req, res);
});

router.get("/listar", function (req, res) {
    problemasCorrigidosController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/sendCorretion", function (req, res) {
    problemasCorrigidosController.sendCorretion(req, res);
})

router.post("/autenticar", function (req, res) {
    problemasCorrigidosController.entrar(req, res);
});

module.exports = router;