var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/trazerRam/", function (req, res) {
    avisoController.trazerRam(req, res);
});

router.get("/trazerCpu/", function (req, res) {
    avisoController.trazerCpu(req, res);
});

router.post("/trazerMaquina/", function (req, res) {
    avisoController.trazerMaquina(req, res);
});

module.exports = router;