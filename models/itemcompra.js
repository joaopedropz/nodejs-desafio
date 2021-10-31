'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItemCompra = sequelize.define('ItemCompra', {
    quantidade: DataTypes.INTEGER,
    valor: DataTypes.FLOAT,
    
  }, {});
  ItemCompra.associate = function(models) {
    // associations can be defined here
    ItemCompra.belongsTo(models.Compra);
    ItemCompra.belongsTo(models.Produto);
  };
  return ItemCompra;
};