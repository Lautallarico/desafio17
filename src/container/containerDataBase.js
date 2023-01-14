import knex from 'knex'
const knexService = knex

class ContainerDataBase {

    constructor(config) {
        this.knex = knexService(config)
    }

    async createTableMessages() {
        try {
            const tableExist = await this.knex.schema.hasTable('messages')
            if (tableExist) return

            await this.knex.schema.createTable('messages', table => {
                table.increments('id');
                table.string('message');
                table.timestamp('messageSendAt');
            })
            console.log(`The table messages has been created`);

        } catch (error) {
            console.log(`El error está en el createTableMessages - error: ${error}`);
        }
    }

    async insertMessage(message) {
        try {
            await this.knex('messages').insert(message)
        } catch (error) {
            console.log(`El error está en el insertMessage - error: ${error}`);
        }

    }

    async getAllMessages() {
        try {
            const listAllMessages = await this.knex.select('*').from('messages')
            return listAllMessages
        } catch (error) {
            console.log(`El error está en el getAllMessages - error: ${error}`);
        }
    }

    async createTableProducts() {
        try {
            const tableExist = await this.knex.schema.hasTable('products')
            if (tableExist) return

            await this.knex.schema.createTable('products', table => {
                table.increments('id');
                table.string('title');
                table.decimal('price');
                table.string('thumbnail');
                table.string('code');
                table.string('description');
                table.float('stock');
                table.timestamp('messageSendAt');
            })
            console.log(`The table products has been created`);

        } catch (error) {
            console.log(`El error está en el createTableProducts - error: ${error}`);
        }
    }

    async insertProduct(product) {
        try {
            await this.knex('products').insert(product)
        } catch (error) {
            console.log(`El error está en el insertProduct - error: ${error}`);
        }

    }

    async getAllProducts() {
        try {
            const listAllProducts = await this.knex.from('products').select('*')
            return listAllProducts
        } catch (error) {
            console.log(`El error está en el getAllProducts - error: ${error}`);
        }
    }
}

export { ContainerDataBase }