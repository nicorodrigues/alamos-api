import { Sequelize, BuildOptions, Model, DataTypes } from "sequelize";
import { TokenModel } from "./Token";

interface UserAttributes {
    id: string;
    id_type: string;
    id_number: string;
    id_sent: boolean;
    first_name: string;
    last_name: string;
    business_name: string;
    birthday: any;
    gender: string;
    phone_mobile: number;
    phone_land: number;
    email: string;
    password: string;
    role: number;
    country: string;
    region: string;
    city: string;
    address: string;
    status: number;
    permissions: string;
    created_at: any;
    updated_at: any;
    deleted_at: any;
    Token?: TokenModel;
}

export interface UserModel extends Model<UserAttributes>, UserAttributes {}

export class User extends Model<UserModel, UserAttributes> {}

export type UserStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): UserModel;
};

export function UserFactory(sequelize: Sequelize): UserStatic {
    return <UserStatic>sequelize.define(
        "User",
        {
            id: {
                type: DataTypes.STRING(255),
                primaryKey: true,
            },
            id_type: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            id_number: {
                type: DataTypes.INTEGER(),
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
                validate: {
                    isEmail: true,
                },
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
            permissions: {
                type: DataTypes.JSON,
                allowNull: true,
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
        },
        {
            tableName: "users",
            paranoid: true,
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: "deleted_at",
        }
    );
}
