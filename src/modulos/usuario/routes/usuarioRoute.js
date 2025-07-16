const express = require("express");
const UsuarioController = require("../controllers/usuarioController");
const AutenticacaoMiddleware = require("../../../middleware/autenticacao.middleware");
const autorizacaoMiddleware = require("../../../middleware/autorizacao.meddleware");

const router = express.Router();

// Rotas públicas
// Rotas públicas
router.post("/cadastrar", UsuarioController.cadastrar);
// router.post("/login", UsuarioController.login);

// Rota de perfil - protegida por token JWT
router.get('/perfil', AutenticacaoMiddleware.autenticarToken, autorizacaoMiddleware.autorizar(['admin']), UsuarioController.perfil);


module.exports = router;
