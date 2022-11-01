var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.post("/getMachinePerSector", function (req, res) {
    medidaController.getMachinePerSector(req, res);
})

router.post("/getHardInfo", function (req, res) {
    medidaController.getHardInfo(req, res);
})



module.exports = router;