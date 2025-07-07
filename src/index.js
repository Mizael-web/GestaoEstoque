
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const { sequelize } = require('./config/configDb');

const autenticacaoRoutes = require('./modulos/autenticacao/routes/autenticacaoRoutes');
const usuarioRoutes = require('./modulos/usuario/routes/usuarioRoutes');
const estoqueRoutes = require('./modulos/estoque/routes/estoqueRoutes');

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// ✅ Importando rotas
const authRoute = require('./modulos/autenticacao/routes/autenticacaoRoutes');

// ✅ Usando a rota
app.use('/api', authRoute);


// Rotas
app.use('/api/auth', autenticacaoRoutes);
app.use('/api/usuario', usuarioRoutes);
app.use('/api/estoque', estoqueRoutes);

const PORTA = process.env.PORTA || 3001;

app.listen(PORTA, async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com banco de dados estabelecida com sucesso.');
    await sequelize.sync({ alter: true });
    console.log('Banco de dados sincronizado.');
  } catch (error) {
    console.error('Erro ao conectar/sincronizar banco:', error);
  }
  console.log(`Servidor rodando na porta ${PORTA}`);
});
