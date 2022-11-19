var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/ajustesUsuarioController");

router.post("/cadastrarImagem", function (req, res) {
    usuarioController.cadastrarImagem(req, res);
})


module.exports = router;