import { ContainerDataBase } from '../../container/index.js'
import { config } from '../../config/index.js'


export class ProductBataBase extends ContainerDataBase {
    constructor() {
        super(config.DATABASE.maria)
    }
}