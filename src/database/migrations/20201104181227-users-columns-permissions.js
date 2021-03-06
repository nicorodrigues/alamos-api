"use strict";

module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.addColumn("users", "permissions", { type: DataTypes.JSON, allowNull: true, after: "status" });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn("users", "permissions");
    },
};
