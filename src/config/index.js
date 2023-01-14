import dotenv from 'dotenv'
dotenv.config()
import { MariaDBService, SQLiteService } from '../services/index.js'


const CART_FILENAME = 'carts'
const PRODUCTS_FILENAME = 'products'
const MESSAGES_FILENAME = 'messages'
const MARIA_DB = MariaDBService
const SQL_LITE = SQLiteService

const config = {
    SERVER: {
        PORT: process.argv[2] || process.env.PORT || 8080,
        SELECTED_DATABASE: process.env.SELECTED_DB ?? 'database'
    },

    DATABASE: {
        filesystem: {
            CART_FILENAME,
            PRODUCTS_FILENAME,
            MESSAGES_FILENAME
        },
        mongo: {
            url: process.env.MONGO_DB_URL,
            dbName: process.env.MONGO_DB_NAME
        },
        maria: {
            MARIA_DB
        },
        sql_lite: {
            SQL_LITE
        }
    },

    PASSPORT: {
        GITHUB: {
            GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
            GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
            GITHUB_CLIENT_CALLBACK_URL: process.env.GITHUB_CLIENT_CALLBACK_URL
        }
    }
}

export { config }