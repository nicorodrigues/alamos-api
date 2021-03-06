"use strict";

module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.createTable("roles", {
            role: {
                type: DataTypes.INTEGER({ length: 4 }),
                primaryKey: true,
                autoIncrement: false,
            },
            name: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            permissions: {
                type: DataTypes.JSON,
                allowNull: false,
            },
            created_at: {
                type: DataTypes.DATE,
            },
            updated_at: {
                type: DataTypes.DATE,
            },
            deleted_at: {
                type: DataTypes.DATE,
                allowNull: true,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("roles");
    },
};
