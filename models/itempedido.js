'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItemPedido = sequelize.define('ItemPedido', {
    quantidade: DataTypes.INTEGER,
    valor: DataTypes.FLOAT
    
  }, {});
  ItemPedido.associate = function(models) {
    // associations can be defined here
    ItemPedido.belongsTo(models.Pedido, {foreignKey: 'PedidoId', as:'pedido'});
    ItemPedido.belongsTo(models.Servico, {foreignKey: 'ServicoId', as:'servico'});
  };
  return ItemPedido;
};