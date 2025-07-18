
const express = require('express');
<<<<<<< HEAD
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
=======
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
>>>>>>> 859f562fd4d0bc56ae2e4a681a70bf0f7fe540f5

module.exports = router;
