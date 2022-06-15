const express = require("express");
const { use } = require("express/lib/application");
const cors = require("cors");
const pessoasController = require("./pessoaController");

const app = express();
app.use(cors());
app.use(express.json());

//Rotas

app.use("/pessoas", pessoasController);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
