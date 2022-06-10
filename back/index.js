const express = require("express");
const { use } = require("express/lib/application");

const validaCpf = require("./src/utils/cpfValidator");

const app = express();

app.use(express.json());

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Olá mundo amigos testante");
});

let amigo;
if (validaCpf("0757774811110")) {
  amigo = "amigos";
} else {
  amigo = "não amigos";
}

app.listen(port, () => console.log(`Servidor rodando na porta :${port}`));
console.log(amigo);
