const express = require("express");
const UsuarioController = require("../controllers/usuarioController");
const autenticarToken = require("../../../middleware/autenticacaoMiddleware");

const router = express.Router();

// Rotas públicas
router.post("/cadastrar", UsuarioController.cadastrar);
router.get("/listar", UsuarioController.listarTodos);
router.get("/listar/:id", UsuarioController.listarPorId);

// Rotas protegidas (exigem autenticação)
router.put("/atualizar/:id", autenticarToken, UsuarioController.editar);
router.delete("/deletar/:id", autenticarToken, UsuarioController.excluirPorId);
router.delete("/deletar-todos", autenticarToken, UsuarioController.excluirTodos);

router.get("/perfil", autenticarToken, UsuarioController.perfil);

module.exports = router;
