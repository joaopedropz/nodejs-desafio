'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ItemPedidos', {
      PedidoId: {
        allowNull : false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model:'pedidos',
          key:'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      ServicoId: {
        allowNull: false,
        primaryKey:true,
        type: Sequelize.INTEGER,
        references: {
          model:'servicos',
          key:'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      quantidade: {
        type: Sequelize.INTEGER
      },
      valor: {
        type: Sequelize.FLOAT
      },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ItemPedidos');
  }
};