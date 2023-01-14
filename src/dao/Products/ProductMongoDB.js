import { ContainerMongoDB } from "../../container/index.js";
import { ProductModel } from "../../models/index.js";

export class ProductsMongo extends ContainerMongoDB {
    constructor() {
        super({
            name: ProductModel.ProductCollection,
            schema: ProductModel.ProductSchema,
        });
    }
}