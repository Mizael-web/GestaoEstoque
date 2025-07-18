const express = require('express');
const EstoqueController = require('../controllers/estoqueController');
const AutenticacaoMiddleware = require('../../../middleware/autenticacao.middleware');
const autorizaçãoMiddleware = require('../../../middleware/autorizacao.middleware')

const router = express.Router();



// rotas publicas
router.get("/", EstoqueController.listarTodos);
router.get("/:id", EstoqueController.listarPorId);


// Todas as rotas são privadas

router.post('/criar', AutenticacaoMiddleware.autenticarToken,autorizaçãoMiddleware.autorizar(['admin']), EstoqueController.criar);
router.put('/:id',AutenticacaoMiddleware.autenticarToken, autorizaçãoMiddleware.autorizar(['admin']), EstoqueController.atualizar);
router.delete('/:id',AutenticacaoMiddleware.autenticarToken,autorizaçãoMiddleware.autorizar(['admin']),  EstoqueController.deletar);

module.exports = router;
