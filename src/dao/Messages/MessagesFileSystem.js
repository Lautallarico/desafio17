import { ContainerFilesystem } from "../../container/index.js";
import { config } from "../../config/index.js";

export class MessagesFileSystem extends ContainerFilesystem {
    constructor() {
        super(config.DATABASE.filesystem.MESSAGES_FILENAME)
    }
}