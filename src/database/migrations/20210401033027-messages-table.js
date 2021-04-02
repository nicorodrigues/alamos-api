"use strict";
module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.createTable("messages", {
            id: {
                type: DataTypes.BIGINT.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
            },
            from: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            to: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            owner_type: {
                type: DataTypes.STRING(20),
                defaultValue: "publications",
            },
            owner_id: {
                type: DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
            },
            text: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            time: {
                type: DataTypes.DATE,
            },
            read: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("messages");
    },
};
