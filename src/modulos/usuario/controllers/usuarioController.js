
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Usuario = require("../../../modulos/usuario/models/usuarioModel");

class UsuarioController {
  static async cadastrar(req, res) {
    try {
<<<<<<< HEAD
      const { nome, email, senha, papel } = req.body;

      if (!nome || !email || !senha || !papel) {
        return res.status(400).json({ msg: "Todos os campos são obrigatórios." });
=======
      const { id, nome, papel, email, senha } = req.body;

      if (!id || !nome || ! papel ||!email || !senha) {
        return res.status(400).json({ msg: "Todos os campos (id, nome, senha) são obrigatórios." });
>>>>>>> 859f562fd4d0bc56ae2e4a681a70bf0f7fe540f5
      }

      if (!["admin", "funcionario"].includes(papel.toLowerCase())) {
        return res.status(400).json({ msg: "O papel deve ser admin ou funcionario." });
      }

      const senhaHash = await bcrypt.hash(senha, 10);

<<<<<<< HEAD
      const novoUsuario = await Usuario.create({
        nome,
        email,
        senha: senhaHash,
        papel: papel.toLowerCase(),
      });
=======
      await UsuarioModel.create({ id, nome, papel, email,  senha: senhaHash });
>>>>>>> 859f562fd4d0bc56ae2e4a681a70bf0f7fe540f5

      return res.status(201).json({ msg: "Usuário criado com sucesso!", usuario: novoUsuario });
    } catch (erro) {
      return res.status(500).json({ msg: "Erro ao criar usuário", erro: erro.message });
    }
  }

  static async login(req, res) {
    try {
      const { email, senha } = req.body;

      const usuario = await Usuario.findOne({ where: { email } });
      if (!usuario) return res.status(404).json({ msg: "Usuário não encontrado" });

      const senhaValida = await bcrypt.compare(senha, usuario.senha);
      if (!senhaValida) return res.status(401).json({ msg: "Senha inválida" });

      // Gera o token com chave do .env
      const token = jwt.sign(
        { id: usuario.id, papel: usuario.papel },
        process.env.SECRET_KEY,
        { expiresIn: "7d" }
      );

      return res.status(200).json({ msg: "Login bem-sucedido", token });
    } catch (erro) {
      return res.status(500).json({ msg: "Erro ao fazer login", erro: erro.message });
    }
  }

  static async perfil(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.usuario.id, {
        attributes: ["id", "nome", "email", "papel"],
      });
      return res.status(200).json({ usuario });
    } catch (erro) {
      return res.status(500).json({ msg: "Erro ao obter perfil", erro: erro.message });
    }
  }
}

module.exports = UsuarioController;
