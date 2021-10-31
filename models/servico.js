'use strict';
module.exports = (sequelize, DataTypes) => {
  const Servico = sequelize.define('Servico', {
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    
  }, {});
  Servico.associate = function(models) {
    // associations can be defined here
  Servico.belongToMany(models.Pedido,{
    through: 'ItemPedido', as:'serv'
    });  
    Servico.hasMany(models.ItemPedido, {foreignKey: 'ServicoId', as: 'item_servicos'})
  };
  
};
