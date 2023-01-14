import { Schema } from "mongoose";

const ProductCollection = 'products'

const ProductSchema = new Schema(
    {
        title: { type: String, require: true, max: 100 },
        description: { type: String, require: true, max: 150 },
        code: { type: String, require: true, max: 10 },
        thumbnail: { type: String, require: true, max: 200 },
        price: { type: Number, require: true },
        stock: { type: Number, require: true, default: 1 },
        timestamp: { type: String, require: true, max: 100 },
    },
    {
        virtuals: true
    }
)

ProductSchema.set('toJSON', {
    transform: (_, response) => {
        response.id = response._id
        delete response.__v
        delete response._id
        return response
    }
})


export const ProductModel = { ProductSchema, ProductCollection }