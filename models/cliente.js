'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    nome: DataTypes.STRING,
    endereco: DataTypes.STRING,
    cidade: DataTypes.STRING,
    uf: DataTypes.STRING,
    nascimento: DataTypes.DATEONLY,
    clienteDesde: DataTypes.DATEONLY
  }, {});
  
  Cliente.associate = function(models) {
    // associations can be defined here
    Cliente.hasMany(models.Pedido, {foreignKey: 'ClienteId', as:'pedidos' });
    Cliente.hasMany(models.Compra)
  
  };
  return Cliente;
};
