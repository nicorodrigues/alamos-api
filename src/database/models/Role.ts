import { Sequelize, BuildOptions, Model, DataTypes } from "sequelize";

interface RoleAttributes {
    role: number;
    name: string;
    permissions: any;

    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
}

export interface RoleModel extends Model<RoleAttributes>, RoleAttributes {}

export class Role extends Model<RoleModel, RoleAttributes> {}

export type RoleStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): RoleModel;
};

export function RoleFactory(sequelize: Sequelize): RoleStatic {
    return <RoleStatic>sequelize.define(
        "Role",
        {
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
        },
        {
            tableName: "roles",
            paranoid: true,
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: "deleted_at",
        }
    );
}
