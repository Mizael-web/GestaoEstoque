
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();
const Usuario = require("../../../modulos/usuario/models/usuarioModel");// Importando o modelo de usuário

// Definindo variaveis de ambiente para TEMPO_ACESS_TOKEN e TEMPO_REFRESH_TOKEN
const tempo_acess_token = process.env.TEMPO_ACESS_TOKEN;
const tempo_refresh_token = process.env.TEMPO_REFRESH_TOKEN;

class AutenticacaoController {
  // gerando o token
  static gerarTokenAcesso(dadosUsuario) {
    return jwt.sign(dadosUsuario, process.env.SECRET_KEY, {
      expiresIn: tempo_acess_token,
    });
  }
  // refress token
  static gerarRefressToken(dadosUsuario) {
    return jwt.sign(dadosUsuario, process.env.SECRET_KEY, {
      expiresIn: tempo_refresh_token,
    });
  }

  static async login(req, res) {
    try {
      const { id } = req.body;
      if (!id) {
        return res
          .status(400)
          .json({ msg: "É necessario informar id para login" });
      }
      const usuario = await Usuario.findOne({
        where: { id },
      });
      if (!usuario) {
        return res.status(401).json({ msg: "Usuario não encontrado!" });
      }
      
      const dadosUsuario = {
        nome: usuario.nome,
        id: usuario.id,  // aidicione o id para o payload do token
        papel: "Usuario",
      };
      // gerando os tokens
      const tokenAcesso = AutenticacaoController.gerarTokenAcesso(dadosUsuario);
      const refreshToken = AutenticacaoController.gerarRefressToken(dadosUsuario);

      res.cookie("refreshToken", refreshToken, {
        httpOnly: false,
        secure: process.env.NODE_ENV,
        sameStrict: "strict",
        maxAge: 1 * 24, // 1 dia
      });
      res.status(200).json({
        msg: "Usuario logado com sucesso",
        tokenAcesso,
        nome: usuario.nome,
        papel: "usuario",
      });
    } catch (error) {
      res.status(500).json({
        msg: "Erro interno do servidor. Por favor tente mais tarde.",
        erro: error.message,
      });
    }
  }
  // Método para renovar o refresh token
  static refreshToken(req, res) {
    // busca o refreshToken na req
    const { refreshToken } = req.cookies;
    if (!refreshToken) {
      return res.status(403).json({ msg: "Refresh token invalido!" });
    }
    jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET,
      (erro, usuario) => {
        if (erro) {
          return res.status(403).json({ msg: "Refresh Token invalido!" });
        }
        const dadosUsuario = {
          nome: usuario.nome,
          papel: "usuario",
        };
        // gerando o novo token
        const novoTokenAcesso = this.gerarTokenAcesso(dadosUsuario);
        // atualizando o token antigo para o novo
        res.status(200).json({ tokenAcesso: novoTokenAcesso });
      }
    );
  }
  static async sair(req, res) {
    try {
      res.clearCookies("refreshToken", {
        httpOnly: false,
        secure: process.env.NODE_ENV,
        sameStrict: "strict",
      });
    } catch (error) {
        res.status(500).json({msg: 'Erro interno do servidor. Por favor, tente mais tarde.', erro: error.message});       

    }
  }
}

module.exports = AutenticacaoController;
