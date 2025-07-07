const { DataTypes } = require("sequelize");
const { sequelize } = require("../../../config/configDb");

const Estoque = sequelize.define("Estoque", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: {
        args: [/^[A-Za-zÀ-ÿ\s]+$/],
        msg: "O nome deve conter apenas letras e espaços.",
      },
    },
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "A marca não pode estar vazia",
      },
    },
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: {
        args: [["Bike", "Acessorio", "Peça"]],
        msg: "Categoria deve ser: Bike, Acessorio ou Peça.",
      },
    },
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: {
        msg: "Quantidade deve ser um número inteiro.",
      },
    },
  },
  preco_unitario: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      isDecimal: {
        msg: "Preço unitário deve ser um número decimal.",
      },
    },
  },
}, {
  tableName: "estoque",
  createdAt: "criado_em",
  updatedAt: "atualizado_em",
});

module.exports = Estoque;
