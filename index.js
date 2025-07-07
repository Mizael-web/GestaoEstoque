
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const { sequelize } = require('./src/config/configDb');

const autenticacaoRoutes = require('./src/modulos/autenticacao/routes/autenticacaoRoutes');
const usuarioRoutes = require('./src/modulos/usuario/routes/usuarioRoutes');
const estoqueRoutes = require('./src/modulos/estoque/routes/estoqueRoutes');

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// ✅ Importando rotas
const authRoute = require('./src/modulos/autenticacao/routes/autenticacaoRoutes');

// ✅ Usando a rota
app.use('/api', authRoute);

console.log(process.env.DB_PASSWORD)

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
