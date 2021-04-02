import { Sequelize, BuildOptions, Model, DataTypes } from "sequelize";
import { MessageModel } from "./Message";

interface PublicationAttributes {
    id: number;
    user_id: string;
    title: string;
    description: string;
    status: boolean;
    price_amount: number;
    price_currency: string;
    created_at: any;
    updated_at: any;
    deleted_at: any;
    messages?: MessageModel[];
    chats: any;
}

export interface PublicationModel extends Model<PublicationAttributes>, PublicationAttributes {}

export class Publication extends Model<PublicationModel, PublicationAttributes> {}

export type PublicationStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): PublicationModel;
};

export function PublicationFactory(sequelize: Sequelize): PublicationStatic {
    return <PublicationStatic>sequelize.define(
        "Publication",
        {
            id: {
                type: DataTypes.BIGINT.UNSIGNED,
                primaryKey: true,
                autoIncrement: false,
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
        },
        {
            tableName: "publications",
            paranoid: true,
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: "deleted_at",
        }
    );
}
