
const CategoriaModel = require("../../categoria/models/categoria.model");

class CategoriaController {
  // Criar uma nova categoria
  static async criar(req, res) {
    try {
      const { nome, descricao } = req.body;

      if (!nome?.trim() || !descricao?.trim()) {
        return res.status(400).json({ msg: "Todos os campos devem ser preenchidos!" });
      }

      const novaCategoria = await CategoriaModel.create({ nome, descricao });

      return res.status(201).json({
        msg: "Categoria criada com sucesso!",
        categoria: novaCategoria,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao criar categoria",
        erro: error.message,
      });
    }
  }

  // Listar todas as categorias
  static async listarTodos(req, res) {
    try {
      const categorias = await CategoriaModel.findAll();
      return res.status(200).json(categorias);
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao listar categorias",
        erro: error.message,
      });
    }
  }

  // Buscar categoria por ID
  static async listarPorId(req, res) {
    try {
      const { id } = req.params;

      const categoria = await CategoriaModel.findByPk(id);
      if (!categoria) {
        return res.status(404).json({ msg: "Categoria não encontrada." });
      }

      return res.status(200).json(categoria);
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao buscar categoria",
        erro: error.message,
      });
    }
  }

  // Editar categoria
  static async editar(req, res) {
    try {
      const { id } = req.params;
      const { nome, descricao } = req.body;

      const categoria = await CategoriaModel.findByPk(id);
      if (!categoria) {
        return res.status(404).json({ msg: "Categoria não encontrada." });
      }

      await categoria.update({ nome, descricao });

      return res.status(200).json({
        msg: "Categoria atualizada com sucesso",
        categoria,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao atualizar categoria",
        erro: error.message,
      });
    }
  }

  // Excluir categoria por ID
  static async excluirPorId(req, res) {
    try {
      const { id } = req.params;

      const categoria = await CategoriaModel.findByPk(id);
      if (!categoria) {
        return res.status(404).json({ msg: "Categoria não encontrada." });
      }

      await categoria.destroy();

      return res.status(200).json({ msg: "Categoria excluída com sucesso!" });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao excluir categoria",
        erro: error.message,
      });
    }
  }
}

module.exports = CategoriaController;
