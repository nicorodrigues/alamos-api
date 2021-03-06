import db from "../../clients/database";

import { UserFactory } from "./User";
import { TokenFactory } from "./Token";
import { RoleFactory } from "./Role";

export const Role = RoleFactory(db);
export const User = UserFactory(db);
export const Token = TokenFactory(db);

//Relations here
// Users
User.hasMany(Token, { foreignKey: "user_id" });
User.belongsTo(Role, { foreignKey: "role", targetKey: "role" });

// Tokens
Token.belongsTo(User, { foreignKey: "user_id" });

// Roles
Role.hasMany(User, { foreignKey: "role" });
