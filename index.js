
<<<<<<< HEAD
require('dotenv').config(); // ✅ Carrega as variáveis de ambiente antes de tudo

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const { sequelize } = require('./src/config/configDb');

// 🔁 Importa os Models antes do sync para garantir que o Sequelize os reconheça
require('./src/modulos/categoria/models/categoria.model');

// 🔁 Importa as rotas
const autenticacaoRoutes = require('./src/modulos/autenticacao/routes/autenticacao.route');
const usuarioRoutes = require('./src/modulos/usuario/routes/usuario.route');
const estoqueRoutes = require('./src/modulos/estoque/routes/estoque.route');
const categoriaRoutes = require('./src/modulos/categoria/routes/categoria.route');

const app = express();

// ✅ Configurações globais
=======
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const { sequelize } = require('./src/config/configDb'); // Importando a instância do Sequelize

const autenticacaoRoutes = require('./src/modulos/autenticacao/routes/autenticacaoRoute');
const usuarioRoutes = require('./src/modulos/usuario/routes/usuarioRoute');
const estoqueRoutes = require('./src/modulos/estoque/routes/estoqueRoute');

dotenv.config();

const app = express();

>>>>>>> 859f562fd4d0bc56ae2e4a681a70bf0f7fe540f5
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
<<<<<<< HEAD
app.use(express.json());
app.use(cookieParser());

// ✅ Registro das rotas
app.use('/api/auth', autenticacaoRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/estoque', estoqueRoutes);
app.use('/api/categoria', categoriaRoutes);
=======

app.use(express.json());
app.use(cookieParser());

// ✅ Importando rotas
const authRoute = require('./src/modulos/autenticacao/routes/autenticacaoRoute');

// ✅ Usando a rota
app.use('/api', authRoute);

// Rotas
app.use('/api/auth', autenticacaoRoutes);
app.use('/api/usuario', usuarioRoutes);
app.use('/api/estoque', estoqueRoutes);
// app.use('/api/categoria', categoriaRutes);
>>>>>>> 859f562fd4d0bc56ae2e4a681a70bf0f7fe540f5

const PORTA = process.env.PORTA || 3001;

app.listen(PORTA, async () => {
  try {
    await sequelize.authenticate();
<<<<<<< HEAD
    console.log('✅ Conexão com o banco de dados estabelecida com sucesso.');

    // ⚠️ ATENÇÃO: "force: true" APAGA e RECRIA as tabelas sempre. Use "alter: true" em produção!
    await sequelize.sync({ alter: true });
    console.log('✅ Banco de dados sincronizado com sucesso.');
  } catch (error) {
    console.error('❌ Erro ao conectar ou sincronizar com o banco de dados:', error);
  }

  console.log(`🚀 Servidor rodando na porta ${PORTA}`);
=======
    console.log('Conexão com banco de dados estabelecida com sucesso.');
    await sequelize.sync({ force: true, alter: true });
    console.log('Banco de dados sincronizado.');
  } catch (error) {
    console.error('Erro ao conectar/sincronizar banco:', error);
  }
  console.log(`Servidor rodando na porta ${PORTA}`);
>>>>>>> 859f562fd4d0bc56ae2e4a681a70bf0f7fe540f5
});
