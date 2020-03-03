'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Todos', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			title: {
				type: Sequelize.STRING
			},
			description: {
				type: Sequelize.STRING
			},
			status: {
				type: Sequelize.BOOLEAN
			},
			due_date: {
				type: Sequelize.DATE
			},
			UserId: {
				type: Sequelize.INTEGER,
				// references: {
				// 	model: 'Users',
				// 	key: 'id'
				// }
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
		return queryInterface.dropTable('Todos');
	}
};