var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/trazer/", function (req, res) {
    avisoController.trazer(req, res);
});

router.post("/autenticar", function (req, res) {
    avisoController.entrar(req, res);
});

module.exports = router;