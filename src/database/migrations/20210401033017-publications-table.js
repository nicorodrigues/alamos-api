"use strict";

module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.createTable("publications", {
            id: {
                type: DataTypes.BIGINT.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            title: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
            },
            status: {
                type: DataTypes.STRING(255),
                defaultValue: "pending",
            },
            price_amount: {
                type: DataTypes.INTEGER.UNSIGNED,
                defaultValue: 0,
            },
            price_currency: {
                type: DataTypes.STRING(5),
                defaultValue: "COP",
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
        await queryInterface.dropTable("publications");
    },
};
