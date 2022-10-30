var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarEmpresa", function (req, res) {
    usuarioController.cadastrarEmpresa(req, res);
})

router.post("/cadastrarUsuarioADM", function (req, res) {
    usuarioController.cadastrarUsuarioADM(req, res);
})

router.post("/cadastrarMaquina", function (req,res) {
    usuarioController.cadastrarMaquina(req,res);
})

router.post("/cadastrarSetor", function (req,res) {
    usuarioController.cadastrarSetor(req,res);
})

router.post("/cadastrarFuncionario", function (req,res) {
    usuarioController.cadastrarFuncionario(req,res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/getLastMaquinaId", function (req, res) {
    usuarioController.getLastMaquinaId(req, res);
});

router.post("/getLastEmpresaId", function (req, res) {
    usuarioController.getLastEmpresaId(req, res);
});

router.post("/getFkSetor", function (req, res) {
    usuarioController.getFkSetor(req, res);
});

router.post("/getSetor", function (req, res) {
    usuarioController.getSetor(req, res);
});

router.post("/getAllSetor", function (req, res) {
    usuarioController.getAllSetor(req, res);
});

module.exports = router;