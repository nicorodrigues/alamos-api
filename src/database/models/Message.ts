import { Sequelize, BuildOptions, Model, DataTypes } from "sequelize";
interface MessageAttributes {
    id: number;
    from: string;
    to: string;
    owner_type: string;
    owner_id: number;
    text: string;
    time: any;
    read: boolean;
}

export interface MessageModel extends Model<MessageAttributes>, MessageAttributes {}

export class Message extends Model<MessageModel, MessageAttributes> {}

export type MessageStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): MessageModel;
};

export function MessageFactory(sequelize: Sequelize): MessageStatic {
    return <MessageStatic>sequelize.define(
        "Message",
        {
            id: {
                type: DataTypes.BIGINT.UNSIGNED,
                primaryKey: true,
                autoIncrement: false,
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
        },
        {
            tableName: "messages",
            timestamps: false,
        }
    );
}
