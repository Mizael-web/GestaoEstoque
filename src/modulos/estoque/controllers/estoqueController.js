
const Estoque = require("../models/estoqueModel");

class EstoqueController {
  static async criar(req, res) {
    try {
      const { nome, marca, categoria, quantidade, preco_unitario } = req.body;

      if (!nome || !marca || !categoria || !quantidade || !preco_unitario) {
        return res.status(400).json({ msg: "Campos obrigatórios ausentes." });
      }

      const item = await Estoque.create({
        nome,
        marca,
        categoria,
        quantidade,
        preco_unitario,
      });

      res.status(201).json({ msg: "Item criado com sucesso", item });
    } catch (error) {
      console.error("Erro criar item:", error);
      res.status(500).json({ msg: "Erro ao criar item", erro: error.message });
    }
  }

  static async listarTodos(req, res) {
    try {
      const itens = await Estoque.findAll();
      res.status(200).json(itens);
    } catch (error) {
      console.error("Erro listar itens:", error);
      res.status(500).json({ msg: "Erro ao listar", erro: error.message });
    }
  }

  static async listarPorId(req, res) {
    try {
      const { id } = req.params;
      const item = await Estoque.findByPk(id);
      if (!item) {
        return res.status(404).json({ msg: "Item não encontrado" });
      }
      res.status(200).json(item);
    } catch (error) {
      console.error("Erro buscar item:", error);
      res.status(500).json({ msg: "Erro ao buscar item", erro: error.message });
    }
  }

  static async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { nome, marca, categoria, quantidade, preco_unitario } = req.body;

      if (!nome && !marca && !categoria && !quantidade && !preco_unitario) {
        return res.status(400).json({ msg: "Nenhum campo para atualizar foi enviado." });
      }

      const [linhasAfetadas] = await Estoque.update(req.body, { where: { id } });

      if (linhasAfetadas === 0) {
        return res.status(404).json({ msg: "Item não encontrado ou dados inalterados" });
      }

      // Opcional: buscar o item atualizado para enviar no response
      const itemAtualizado = await Estoque.findByPk(id);

      res.status(200).json({ msg: "Item atualizado com sucesso", item: itemAtualizado });
    } catch (error) {
      console.error("Erro atualizar item:", error);
      res.status(500).json({ msg: "Erro ao atualizar", erro: error.message });
    }
  }

  static async deletar(req, res) {
    try {
      const { id } = req.params;
      const deletado = await Estoque.destroy({ where: { id } });

      if (!deletado) {
        return res.status(404).json({ msg: "Item não encontrado" });
      }

      res.status(200).json({ msg: "Item excluído com sucesso" });
    } catch (error) {
      console.error("Erro excluir item:", error);
      res.status(500).json({ msg: "Erro ao excluir", erro: error.message });
    }
  }
}

module.exports = EstoqueController;
