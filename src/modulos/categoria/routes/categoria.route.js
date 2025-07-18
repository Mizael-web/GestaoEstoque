
const express = require('express');
const CategoriaController = require('../controllers/categoria.controller'); // ajuste aqui se for necessário
const AutenticacaoMiddleware = require('../../../middleware/autenticacao.middleware');
const autorizacaoMiddleware = require('../../../middleware/autorizacao.middleware');

const router = express.Router();

// Rotas públicas
router.get("/", CategoriaController.listarTodos);
router.get("/:id", CategoriaController.listarPorId);

// Rotas privadas
router.post('/criar', AutenticacaoMiddleware.autenticarToken, autorizacaoMiddleware.autorizar(['admin']), CategoriaController.criar);
router.put('/:id', AutenticacaoMiddleware.autenticarToken, autorizacaoMiddleware.autorizar(['admin']), CategoriaController.editar);
router.delete('/:id', AutenticacaoMiddleware.autenticarToken, autorizacaoMiddleware.autorizar(['admin']), CategoriaController.excluirPorId);

module.exports = router;
