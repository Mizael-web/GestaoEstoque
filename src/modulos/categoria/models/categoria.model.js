
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
<<<<<<< HEAD
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'O nome da categoria é obrigatório.'
      },
      len: {
        args: [3, 100],
        msg: 'O nome da categoria deve ter entre 3 e 100 caracteres.'
      }
    }
  },
=======
    allowNull: false
  },

>>>>>>> 859f562fd4d0bc56ae2e4a681a70bf0f7fe540f5
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
<<<<<<< HEAD
      notEmpty: {
        msg: 'A descrição é obrigatória.'
      },
      len: {
        args: [10, 255],
        msg: 'A descrição deve ter entre 10 e 255 caracteres.'
      }
    }
  }
}, {
  tableName: 'categoria',
  createdAt: 'criado_em',
  updatedAt: 'atualizado_em',
  underscored: true, // Para compatibilidade com snake_case
});

module.exports = CategoriaModel;
=======
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
>>>>>>> 859f562fd4d0bc56ae2e4a681a70bf0f7fe540f5
