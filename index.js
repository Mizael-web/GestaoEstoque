
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

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

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

const PORTA = process.env.PORTA || 3001;

app.listen(PORTA, async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com banco de dados estabelecida com sucesso.');
    await sequelize.sync({ force: true, alter: true });
    console.log('Banco de dados sincronizado.');
  } catch (error) {
    console.error('Erro ao conectar/sincronizar banco:', error);
  }
  console.log(`Servidor rodando na porta ${PORTA}`);
});
