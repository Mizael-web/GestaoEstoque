
const express = require('express');
const CategoriaController = require('../controllers/estoqueController');
const AutenticacaoMiddleware = require('../../../middleware/autenticacaoMiddleware');
const autorizaçãoMiddleware = require('../../../middleware/autorizacao.middleware')



const router = express.Router();

// rotas publicas
router.get("/", CategoriaController.listarTodos);
router.get("/:id", CategoriaController.listarPorId);


// Todas as rotas são privadas

router.post('/criar', AutenticacaoMiddleware.autenticarToken,autorizaçãoMiddleware.autorizar(['admin']); CategoriaController.criar);
router.put('/:id',AutenticacaoMiddleware.autenticarToken, autorizaçãoMiddleware.autorizar(['admin']); CategoriaController.atualizar);
router.delete('/:id',AutenticacaoMiddleware.autenticarToken,autorizaçãoMiddleware.autorizar(['admin']); CategoriaController.deletar);

module.exports = router;
