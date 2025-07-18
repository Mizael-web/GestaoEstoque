
const express = require('express');
const router = express.Router();

<<<<<<<< HEAD:src/modulos/autenticacao/routes/autenticacao.route.js
const AutenticacaoController = require('../../autenticacao/controllers/autenticacao.controller');
========
const AutenticacaoController = require('../../autenticacao/controllers/autenticacaoController');
>>>>>>>> 859f562fd4d0bc56ae2e4a681a70bf0f7fe540f5:src/modulos/autenticacao/routes/autenticacaoRoute.js

// rota publica de login
router.post('/login', AutenticacaoController.login);

// rota para sair 
router.post('/logout', AutenticacaoController.sair);

// rota usada pelo navegador para atualizar o token 
router.post('/refress-token', AutenticacaoController.refreshToken);


module.exports = router;