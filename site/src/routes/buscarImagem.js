var express = require("express");
var router = express.Router();

var buscarImagemController = require("../controllers/buscarImagemController");

router.post("/buscarImagem", function (req, res) {
    buscarImagemController.buscarImagem(req, res);
})


module.exports = router;