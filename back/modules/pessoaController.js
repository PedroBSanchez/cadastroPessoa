const express = require("express");
const router = express.Router();

const validaCpf = require("../src/utils/validators/cpfValidator");

const PessoaModel = require("../src/models/pessoa.model");

// Implementação de métodos http

router.get("/", async (req, res) => {
  try {
    const pessoas = await PessoaModel.find({});
    res.status(200).json(pessoas);
  } catch (error) {
    res.status(500).send("Erro ao listar pessoas");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const pessoa = await PessoaModel.findById(req.params.id);
    res.status(200).json(pessoa);
  } catch (error) {
    res.status(500).send("Pessoa não encontrada");
  }
});

// Implementar findByCpf
router.get("/teste/:cpf", async (req, res) => {
  let cpfBanco = req.params.cpf;
  try {
    const pessoa = await PessoaModel.find({
      cpf: cpfBanco,
    });
    res.status(200).json(pessoa);
  } catch (error) {
    res.status(500).send("Pessoa não encontrada");
  }
});

router.post("/", async (req, res) => {
  try {
    if (validaCpf(req.body.cpf)) {
      const pessoa = await PessoaModel.create(req.body);
      res.status(200).send("Pessoa cadastrada com sucesso");
    } else res.status(400).send("CPF inválido");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const pessoa = await PessoaModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).send("Pessoa atualizada com sucesso");
  } catch (error) {}
});

router.delete("/:id", async (req, res) => {
  try {
    const pessoa = await PessoaModel.findByIdAndRemove(req.params.id);
    res.status(200).send("Pessoa removida com sucesso");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
