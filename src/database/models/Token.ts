import { Sequelize, BuildOptions, Model, DataTypes } from "sequelize";
import { UserModel } from "./User";

interface TokenAttributes {
    token: string;
    user_id: string;
    country: string;
    ip: string;
    created_at?: any;
    expires_at?: any;
    deleted_at?: any;
}

export interface TokenModel extends Model<TokenAttributes>, TokenAttributes {
    User?: UserModel;
}

export class Token extends Model<TokenModel, TokenAttributes> {}

export type TokenStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): TokenModel;
};

export function TokenFactory(sequelize: Sequelize): TokenStatic {
    return <TokenStatic>sequelize.define(
        "Token",
        {
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
                type: DataTypes.DATE,
            },
            expires_at: {
                type: DataTypes.DATE,
                defaultValue: Date.now() + 1000 * 60 * 60 * 24,
            },
            deleted_at: {
                type: DataTypes.DATE,
                allowNull: true,
            },
        },
        {
            tableName: "tokens",
            paranoid: true,
            timestamps: true,
            createdAt: "created_at",
            updatedAt: false,
            deletedAt: "deleted_at",
        }
    );
}
