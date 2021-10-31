'use strict';
module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produto', {
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    
  }, {});
  Produto.associate = function(models) {
    // associations can be defined here
    Produto.belongsTo(models.Compra); 
    Produto.belongsTo(models.ItemCompra);
  };
  return Produto;
};