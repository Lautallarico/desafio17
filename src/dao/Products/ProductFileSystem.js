import { ContainerFilesystem } from "../../container/index.js";
import { config } from "../../config/index.js";

export class ProductFileSystem extends ContainerFilesystem {
    constructor(){
        super(config.DATABASE.filesystem.PRODUCTS_FILENAME)
    }
}
