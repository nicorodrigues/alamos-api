import { UserModel } from "../database/models/User";

export interface UserWithMeta {
    user: UserModel | {};
    meta: any;
}
