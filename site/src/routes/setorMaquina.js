var express = require("express");
var router = express.Router();

var setorMaquinaController = require("../controllers/setorMaquinaController");


router.post("/cadastrarMaquina", function (req,res) {
    setorMaquinaController.cadastrarMaquina(req,res);
})

router.post("/cadastrarSetor", function (req,res) {
    setorMaquinaController.cadastrarSetor(req,res);
})

router.post("/getFkSetor", function (req, res) {
    setorMaquinaController.getFkSetor(req, res);
});

router.post("/getSetor", function (req, res) {
    setorMaquinaController.getSetor(req, res);
});

router.post("/getAllSetor", function (req, res) {
    setorMaquinaController.getAllSetor(req, res);
});

router.post("/getLastMaquinaId", function (req, res) {
    setorMaquinaController.getLastMaquinaId(req, res);
});

router.post("/getMachinePerSector", function (req, res) {
    setorMaquinaController.getMachinePerSector(req, res);
})

router.post("/getHardInfo", function (req, res) {
    setorMaquinaController.getHardInfo(req, res);
})


module.exports = router;