# GestaoEstoque

# 📦 Gestão de Estoque com Autenticação (Node.js + Express + Sequelize)

Este projeto é um sistema básico de gestão de estoque com autenticação JWT, estruturado em **MVC** e usando **Node.js**, **Express** e **PostgreSQL** com **Sequelize**.

## 🔧 Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- PostgreSQL
- JWT
- bcryptjs
- dotenv

## 📁 Estrutura de Diretórios

src/
├── config/
│ └── configDb.js
├── modulos/
│ └── autenticacao/
│ ├── controllers/
│ └── routes/
├── usuario/
│ ├── controllers/
│ ├── models/
│ └── routes/
├── estoque/
│ ├── controllers/
│ ├── models/
│ └── routes/

bash
Copiar
Editar


## 🔐 Rotas Protegidas

- `POST /login` - Login com ID
- `POST /logout` - Logout
- `POST /refresh-token` - Gera novo token de acesso
- `GET/POST/PUT/DELETE /usuario` e `/estoque` - Protegidas com token JWT

## 🚀 Como Rodar o Projeto

```bash
# 1. Clone o repositório
git clone https://github.com/seuusuario/gestao-estoque.git

# 2. Instale as dependências
npm install

# 3. Configure seu .env (baseado no .env.example)

# 4. Execute as migrations e inicie o servidor


npm install express dotenv bcryptjs jsonwebtoken cookie-parser
npm install pg pg-hstore sequelize
npm install --save-dev nodemon
npm install cors
npm install express dotenv cookie-parser bcryptjs jsonwebtoken pg pg-hstore sequelize




#  pra rodar o projeto

npm start


