
const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/configDb');

const CategoriaModel = sequelize.define('Categoria', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },

  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [10, 255],
        msg: "A descrição deve ter entre 10 e 255 caracteres."
      }
    }
}
},
  {
    tableName: "categoria",
    createdAt: "criado_em",
    updatedAt: "atualizado_em",
  }
);

module.exports = CategoriaModel;