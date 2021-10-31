'use strict';
module.exports = (sequelize, DataTypes) => {
  const Compra = sequelize.define('Compra', {
    data: DataTypes.DATEONLY,
    
  }, {});
  Compra.associate = function(models) {
    // associations can be defined here
    Compra.belongsTo(models.Cliente);
    Compra.hasMany(models.ItemCompra);
    Compra.hasMany(models.Produto);
  };
  return Compra;
};