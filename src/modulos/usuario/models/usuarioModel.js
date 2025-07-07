
// modulos/usuario/models/usuarioModel.js

const { DataTypes } = require("sequelize");
const { sequelize } = require("../../../config/configDb");

const Usuario = sequelize.define("Usuario", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: "usuarios",
  timestamps: false,
});

module.exports = Usuario;
