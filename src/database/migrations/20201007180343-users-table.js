"use strict";

module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.createTable("users", {
            id: {
                type: DataTypes.STRING(255),
                primaryKey: true,
            },
            id_type: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            id_number: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            id_sent: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            id_verified: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            first_name: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            last_name: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            business_name: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            birthday: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            gender: {
                type: DataTypes.STRING(1),
                defaultValue: "M",
            },
            phone_mobile: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            phone_land: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            email: {
                type: DataTypes.STRING(255),
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            role: {
                type: DataTypes.INTEGER({ length: 4 }),
                allowNull: false,
                defaultValue: 1,
            },
            country: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            region: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            city: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            address: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            status: {
                type: DataTypes.INTEGER({ length: 4 }),
                allowNull: true,
                defaultValue: 0,
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
        await queryInterface.dropTable("users");
    },
};
