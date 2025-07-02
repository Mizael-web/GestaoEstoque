
const Usuario = require("../models/aluno.model");
const bcrypt =require('bcryptjs')

class UsuarioController {
  static async cadastrar(req, res) {
    try {
      const { id, nome, marca, categoria, quantidade, preco_unitario } = req.body;
      if (!nome|| !marca || !categoria || !quantidade || !preco_unitario) {
        return res
          .status(400)
          .json({ msg: "Todos os campos devem serem preenchidos!" });
      }
      // criptografando ID
      const idCriptografada = await bcrypt.hash(id, 15);
      await usuario.create({ nome, marca, categoria, quantidade, preco_unitario, id: idCriptografada });
      res.status(200).json({ msg: 'Usuario criado com sucesso' });
    } catch (error) {
        res.status(500).json({msg: 'Erro do servidor. Tente novamente mais tarde!', erro: error.message})
    }
  }
  static async perfil(req, res) {
    try {
      
      const { id } = req.usuario; // vindo do token

      // Busca mais dados se necessário
      const usuario = await usuario.findOne({
        where: { id },
        attributes: ['nome', 'marca', 'categoria', 'quantidade', 'preco_unitario'], // apenas os campos públicos
        //          { exclude: "id"} caso haja varias tabelas e relacionamentos
      });

      if (!usuario) {
        return res.status(404).json({ msg: "Usuario não encontrado." });
      }

      res.status(200).json({ perfil: usuario });
    } catch (error) {
        res.status(500).json({
          msg: "Erro ao buscar perfil.",
          erro: error.message
        });
      }
    }
      
      static async criar(requisicao, resposta) {
        try {
          const { id, nome, marca, categoria, quantidade, preco_unitario } = requisicao.body;
          if (!nome || !marca ||!categoria || !quantidade || !preco_unitario) {
            return resposta
              .status(400)
              .json({ mensagem: "Todos os campos devem ser fornecidos!" });
          }
          const novoUsuario = await UsuarioModel.criar(id,  nome, marca, categoria, quantidade, preco_unitario);
          resposta
            .status(201)
            .json({ mensagem: "Aluno criado com sucesso", usuario: novoUsuario });
        } catch (error) {
          resposta
            .status(500)
            .json({ mensagem: "Erro ao criar o usuario!", erro: error.message });
        }
      }
      static async editar(requisicao, resposta) {
        // http://localhost:3000/aluno/
        try {
          const id = requisicao.params.id;
          const { nome, marca, categoria, quantidade, preco_unitario} = requisicao.body;
          if (!nome || !marca || !categoria || !quantidade || !preco_unitario) {
            return resposta
              .status(400)
              .json({ mensagem: "Todos os campos devem ser preenchidos!" });
          }
    
          const usuario = await UsuarioModel.editar(id, nome, marca, categoria, quantidade, preco_unitario);
          if (usuario.length === 0) {
            return resposta.status(400).json({ mensagem: "Usuario não encontrado!" });
          }
          resposta.status(200).json({ mensagem: "Usuario editado com sucesso!", usuario: usuario });
        } catch (error) {
          resposta
            .status(500)
            .json({ mensagem: "Erro ao editar o usuario!", erro: error.message });
        }
      }
      static async listarTodos(requisicao, resposta) {
        try {
          const usuario = await ModelUsuario.listar();
          if (usuario.length === 0) {
            return resposta
              .status(400)
              .json({ mensagem: "Não existe usuario a serem exibidos!" });
          }
          resposta.status(200).json(usuario);
        } catch (error) {
          resposta
            .status(500)
            .json({ mensagem: "Erro ao listar os usuario!", erro: error.message });
        }
      }
      static async listarPorId(requisicao, resposta) {
        try {
          const id = requisicao.params.id;
          const usuario = await |UsuarioModel.listarPorMatricula(usuario);
          if (usuario.length === 0) {
            return resposta.status(400).json({ mensagem: "Usuario não encontrado!" });
          }
          resposta.status(200).json(usuario);
        } catch (error) {
          resposta.status(500).json({
            mensagem: "Erro ao listar por matricula o usuario!",
            erro: error.message,
          });
        }
      }
      static async excluirTodos(requisicao, resposta) {
        try {
          debug("Rota raiz foi acessada!");
          await UsuarioModel.excluirTodos();
          resposta
            .status(200)
            .json({ mensagem: "Todos os usuario foram excluidos com sucesso!" });
        } catch (error) {
          resposta.status(500).json({
            mensagem: "Erro ao excluir todos os usuario!",
            erro: error.message,
          });
        }
      }
      static async excluirPorId(requisicao, resposta) {
        try {
          const id = requisicao.params.id;
          const usuario = await UsuarioModel.listarPorId(id);
          if (usuario.length === 0) {
            return resposta.status(400).json({ mensagem: "Usuario não encontrado!" });
          }
          await UsuarioModel.excluirPorId(id);
          resposta.status(200).json({ mensagem: "Usuario excluido com sucesso!" });
        } catch (error) {
          resposta
            .status(500)
            .json({ mensagem: "Erro ao excluir o usuario!", erro: error.message });
            }
  }
}

module.exports = UsuarioController;
