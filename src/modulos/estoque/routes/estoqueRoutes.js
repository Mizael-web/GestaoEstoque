
const express = require('express');
const router = express.Router();
const EstoqueController = require('../controllers/estoqueController');
const autenticar = require('../../autenticacao/controllers/autenticacaoController');

// Todas as rotas são privadas
router.use(autenticar);

router.post('/', EstoqueController.criar);
router.get('/', EstoqueController.listarTodos);
router.get('/:id', EstoqueController.listarPorId);
router.put('/:id', EstoqueController.atualizar);
router.delete('/:id', EstoqueController.deletar);

module.exports = router;
