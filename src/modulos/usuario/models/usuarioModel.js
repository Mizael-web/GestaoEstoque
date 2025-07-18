


const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/configDb');

const Usuario = sequelize.define('Usuario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },

    papel: {
      type: DataTypes.ENUM("admin", "funcionario"),
      allowNull: false,
      validate: {
        isIn: {
          args: [["admin", "funcionario"]],
          msg: "O papeis devem ser admin e funcionario."
        }
      }
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: "Email inválido" },
      },
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      validade: {
        is: {
          args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          msg: "A senha deve ter no mínimo 8 caracteres, com letra maiúscula, minúscula, número e caractere especial.",
        },
      },
    },
  },
  
  {
    tableName: "usuario",
    createdAt: "criado_em",
    updatedAt: "atualizado_em",
  }
);

module.exports = Usuario;