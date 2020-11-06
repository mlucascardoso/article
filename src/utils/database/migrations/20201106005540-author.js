module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('authors', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING(30)
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: true,
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('authors');
    }
};
