const PessoaModel = require("../../models/pessoa.model");

const findByCpf = async (strCpf) => {
  let pessoaBanco = await PessoaModel.find({ cpf: strCpf });
  if (pessoaBanco.length === 0) {
    return false;
  }
  return true;
};

module.exports = findByCpf;
