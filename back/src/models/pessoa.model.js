const mongoose = require("mongoose");

const pessoaScheme = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  dataNascimento: {
    type: Date,
    required: true,
  },
});

const pessoaModel = mongoose.model("Pessoa", pessoaScheme);

module.exports = pessoaModel;
