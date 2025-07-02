
const { DataTypes } = require("sequelize");
const { sequelize } = require("../../../config/configDB");
const UsuarioController = require("../../usuario/controllers/usuarioController");

const Usuario= sequelize.define(
  "Usuario",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      validate: {
        is: {
          args: /^[A-Za-z]\d{5}$/,
          msg: "O Id deve iniciar com uma letra e ter 5 números!",
        },
      }
    },
    nome: {
      type: DataTypes.STRING,
    allowNull: false,
    validate:{
        isAlpha:{
            msg:'É permitido apenas letras!'
        }
    }
  },
    
    marca: {
      type: DataTypes.STRING,
    validate:{
        NotEmpty:{
          msg: " A descrição não pode estár vazia"
        
        }
    }
  },
    categoria: {
      type: DataTypes.STRING,
    allowNull: false,
    validator:{
        isIn:{
            args:[['Bike', 'Acessorio','Peça']]
        }
    }

  },

    quantidade: {
      type: DataTypes.DATE,
    allowNull: false,
    validator:{
        isDate: true,
    }

  },
    preco_unitario: {
      type:  DataTypes.INTEGER,
      autoIncrement: true,      
      allowNull: false,
    }, 
  }, 

  {
    tableName: "usuario",
    createdAt: "criado_em",
    updatedAt: "atualizado_em",
  }
);


module.exports = Usuario;
