
const express = require('express');
const UsuarioController = require('../controllers/usuarioController')
const AutenticacaoMiddleware = require('../middleware/aluno.autenticacao')

const router = express.Router()

// rota de cadastro
router.get('/usuario/cadastrar', UsuarioController.cadastrar);
router.get('/usuaro/listar', UsuarioController.listar);
router.get('/usuaro/listar/:id', UsuarioController.listar);
router.post('/usuaro/listar', UsuarioController.criar);
router.put('/usuario/atualizar/:id', UsuarioController.atualizar);
router.delete('/usuario/deletar/:id', UsuarioController.deletar);



// rota protegida para exibir perfil do aluno
router.get('/perfil', AutenticacaoMiddleware.autenticarToken, UsuarioController.perfil);


module.exports = router