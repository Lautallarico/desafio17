import { ContainerMongoDB } from "../../container/index.js";
import { UserModel } from "../../models/index.js";

export class UsersMongo extends ContainerMongoDB {
    constructor() {
        super({
            name: UserModel.UserCollection,
            schema: UserModel.UserSchema,
        });
    }
}