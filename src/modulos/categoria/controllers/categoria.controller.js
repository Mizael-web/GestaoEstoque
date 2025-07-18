<<<<<<< HEAD

const CategoriaModel = require("../../categoria/models/categoria.model");

class CategoriaController {
  // Criar uma nova categoria
=======
const bcrypt = require("bcryptjs");
const CategoriaModel = require("../../categoria/models/categoria.model");

class CategoriaController {
>>>>>>> 859f562fd4d0bc56ae2e4a681a70bf0f7fe540f5
  static async criar(req, res) {
    try {
      const { nome, descricao } = req.body;

<<<<<<< HEAD
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
=======
      if (!nome || !descricao) {
        return res.status(400).json({ msg: "Todos os campos devem ser preenchidos!" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Erro ao listar", erro: error.message });
    }
  }
  //     // Criptografar a senha
  //     const senhaCriptografada = await bcrypt.hash(senha, 10);


  static async listarTodos(req, res) {
    try {
      const itens = await CategoriaModel.findAll({
        attributes: { exclude: ["senha"] }, // remove a senha da resposta
      });
      res.status(200).json(itens);
    } catch (error) {
      res.status(500).json({ msg: "Erro ao listar", erro: error.message });
    }
  }

  static async listarPorId(req, res) {
    try {
      const { id } = req.params;
      const item = await CategoriaModel.findOne({
        where: { id },
        attributes: { exclude: ["senha"] },
      });

      if (!item) {
        return res.status(404).json({ msg: "Item não encontrado." });
      }

      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ msg: "Erro ao buscar item", erro: error.message });
    }
  }

>>>>>>> 859f562fd4d0bc56ae2e4a681a70bf0f7fe540f5
  static async editar(req, res) {
    try {
      const { id } = req.params;
      const { nome, descricao } = req.body;

<<<<<<< HEAD
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
=======
      const item = await CategoriaModel.findOne({ where: { id } });
      if (!item) {
        return res.status(404).json({ msg: "Categoria não encontrada." });
      }

      const novaSenha = senha ? await bcrypt.hash(senha, 10) : item.senha;

      await CategoriaModel.update(
        {
          nome,
          descricao          
        },
        { where: { id } }
      );

      const itemAtualizado = await CategoriaModel.findOne({ where: { id }, attributes: { exclude: ["senha"] } });

      res.status(200).json({ msg: "Categoria atualizada com sucesso", item: itemAtualizado });
    } catch (error) {
      res.status(500).json({ msg: "Erro ao atualizar categoria", erro: error.message });
    }
  }

  static async excluirPorId(req, res) {
    try {
      const { id } = req.params;
      const item = await CategoriaModel.findByPk(id);

      if (!item) {
        return res.status(404).json({ msg: "Categoria não encontrada." });
      }

      await CategoriaModel.destroy({ where: { id } });

      res.status(200).json({ msg: "Categoria excluída com sucesso!" });
    } catch (error) {
      res.status(500).json({ msg: "Erro ao excluir categoria", erro: error.message });
>>>>>>> 859f562fd4d0bc56ae2e4a681a70bf0f7fe540f5
    }
  }
}

<<<<<<< HEAD
module.exports = CategoriaController;
=======
module.exports = CategoriaController;
>>>>>>> 859f562fd4d0bc56ae2e4a681a70bf0f7fe540f5
