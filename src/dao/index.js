import { CartsMongo, CartFileSystem } from './Carts/index.js'
import { ProductsMongo, ProductBataBase, ProductFileSystem } from './Products/index.js'
// import { MessagesDataBase, MessagesFileSystem } from './Messages/index.js'
import { MongoDBService } from '../services/index.js'
import { config } from '../config/index.js'
import { UsersMongo } from './Users/index.js'



const getSelectedDaos = () => {
    switch (config.SERVER.SELECTED_DATABASE) {
        case 'mongo': {
            MongoDBService.init();
            return {
                ProductDao: new ProductsMongo(),
                CartDao: new CartsMongo(),
                // MessageDao: new MessagesMongo() **NO CREADO**
                UserDao: new UsersMongo()
            }
        }
        case 'filesystem': {
            return {
                ProductDao: new ProductFileSystem(),
                CartDao: new CartFileSystem(),
                // MessageDao: new MessagesFileSystem(),
                UserDao: new UsersMongo(),
            }
        }
        case 'database': {
            return {
                ProductDao: new ProductBataBase(),
                CartDao: new CartDatabase(),
                // MessageDao: new MessagesDataBase(),
                UserDao: new UsersMongo(),
            }
        }
    }
}

const { ProductDao, CartDao, UserDao } = getSelectedDaos();

export { ProductDao, CartDao, UserDao }