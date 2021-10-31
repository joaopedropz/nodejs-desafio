'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define('Pedido', {
    dataPedido: DataTypes.DATEONLY
    
  }, {});
  Pedido.associate = function(models) {
    // associations can be defined here
    Pedido.belongsTo(models.Cliente, {foreignKey: 'ClienteId', as: 'clientes' });
    Pedido.belongsToMany(models.Servico,{
      foreignKey: 'ServicoId',
      through: 'ItemPedido' , as:'servicos_ped'
    });
    Pedido.hasMany(models.ItemPedido, {foreignKey:'PedidoId',as: 'item_pedido'})
  };
  return Pedido;
};