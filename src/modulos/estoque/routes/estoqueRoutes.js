const express = require('express');
const EstoqueController = require('../controllers/estoqueController');
const AutenticacaoMiddleware = require('../../../middleware/autenticacaoMiddleware');

const router = express.Router();
// Todas as rotas são privadas

router.post('/criar', AutenticacaoMiddleware.autenticarToken, EstoqueController.criar);
router.get('/', AutenticacaoMiddleware.autenticarToken, EstoqueController.listarTodos);
router.get('/:id',AutenticacaoMiddleware.autenticarToken, EstoqueController.listarPorId);
router.put('/:id',AutenticacaoMiddleware.autenticarToken, EstoqueController.atualizar);
router.delete('/:id',AutenticacaoMiddleware.autenticarToken, EstoqueController.deletar);

module.exports = router;
