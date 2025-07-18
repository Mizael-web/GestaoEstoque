
const express = require("express");
const UsuarioController = require("../controllers/usuarioController");
const AutenticacaoMiddleware = require("../../../middleware/autenticacao.middleware");

const router = express.Router();

// Rotas públicas
router.post("/", UsuarioController.cadastrar);       // POST /api/usuarios       (Cadastro)
router.post("/login", UsuarioController.login);      // POST /api/usuarios/login (Login)

// Rota protegida - Perfil do usuário logado
router.get("/me", AutenticacaoMiddleware.autenticarToken, UsuarioController.perfil); // GET /api/usuarios/me

module.exports = router;
