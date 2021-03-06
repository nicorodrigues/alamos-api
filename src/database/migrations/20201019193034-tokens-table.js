"use strict";

module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.createTable("tokens", {
            token: {
                type: DataTypes.STRING(255),
                primaryKey: true,
            },
            user_id: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            country: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            ip: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            created_at: {
                type: DataTypes.STRING(255),
            },
            expires_at: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            deleted_at: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("tokens");
    },
};
