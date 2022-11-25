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

router.post("/cadastrarFuncionario", function (req,res) {
    usuarioController.cadastrarFuncionario(req,res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/getLastEmpresaId", function (req, res) {
    usuarioController.getLastEmpresaId(req, res);
});

router.post("/verificar", function (req, res) {
    usuarioController.verificar(req, res);
});

router.post("/registrarCodigo", function (req, res) {
    usuarioController.registrarCodigo(req, res);
});

router.post("/verificarCodigo", function (req, res) {
    usuarioController.verificarCodigo(req, res);
});

router.post("/novaSenha", function (req, res) {
    usuarioController.novaSenha(req, res);
});

router.post("/mudarRam", function (req, res) {
    usuarioController.mudarRam(req, res);
});

module.exports = router;