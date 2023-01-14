import joi from "joi"

const product = joi.object({
    title: joi.string().min(3).max(45).required(),
    description: joi.string().min(3).max(150).required(),
    code: joi.string().min(3).max(7).required(),
    price: joi.number().required(),
    thumbnail: joi.string().min(3).max(200).required(),
    stock: joi.number().required(),
    timestamp: joi.string().required(),
})

export const JOI_VALIDATOR = { product }