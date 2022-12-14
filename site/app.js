//process.env.AMBIENTE_PROCESSO = "desenvolvimento"; 
process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA =  process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

var app = express();

var usuarioRouter = require("./src/routes/usuarios");
var medidasRouter = require("./src/routes/medidas");
var problemasCorrigidosRouter = require("./src/routes/problemasCorrigidos");
var setorMaquinaRouter = require("./src/routes/setorMaquina");
var pesquisaMaquinaRouter = require("./src/routes/pesquisaMaquina");
var avisoRouter = require("./src/routes/aviso");
var mostrarCorrecoesRouter = require("./src/routes/mostrarCorrecoes");
var at = require("./src/routes/at")





app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/usuarios", usuarioRouter);
app.use("/medidas", medidasRouter);
app.use("/problemasCorrigidos", problemasCorrigidosRouter);
app.use("/setorMaquina", setorMaquinaRouter);
app.use("/pesquisaMaquina", pesquisaMaquinaRouter);
app.use("/aviso", avisoRouter);
app.use("/mostrarCorrecoes",mostrarCorrecoesRouter);
app.use("/at",at);


app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
    \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});
