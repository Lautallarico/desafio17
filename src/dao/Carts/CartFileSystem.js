import { ContainerFilesystem } from "../../container/index.js"
import { config } from "../../config/index.js";


export class CartFileSystem extends ContainerFilesystem {
    constructor() {
        super(config.DATABASE.filesystem.CART_FILENAME)
    }
}