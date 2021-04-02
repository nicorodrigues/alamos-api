import db from "../../clients/database";

import { UserFactory } from "./User";
import { TokenFactory } from "./Token";
import { RoleFactory } from "./Role";
import { MessageFactory } from "./Message";
import { PublicationFactory } from "./Publication";

export const Role = RoleFactory(db);
export const User = UserFactory(db);
export const Token = TokenFactory(db);
export const Message = MessageFactory(db);
export const Publication = PublicationFactory(db);

//Relations here
// Users
User.hasMany(Token, { foreignKey: "user_id" });
User.belongsTo(Role, { foreignKey: "role", targetKey: "role" });

// Tokens
Token.belongsTo(User, { foreignKey: "user_id" });

// Roles
Role.hasMany(User, { foreignKey: "role" });

// Publications
Publication.hasMany(Message, {
    foreignKey: "owner_id",
    constraints: false,
    scope: {
        owner_type: "publications",
    },
    as: "messages",
});

Message.belongsTo(Publication, {
    foreignKey: "owner_id",
    constraints: false,
    scope: {
        owner_type: "publications",
    },
    as: "publication",
});
