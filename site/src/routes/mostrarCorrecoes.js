var express = require("express");
var router = express.Router();

var mostrarCorrecoesController = require("../controllers/mostrarCorrecoesController");


router.post("/mostrarCorrecoes", function (req, res) {
    mostrarCorrecoesController.mostrarCorrecoes(req, res);
})

module.exports = router;