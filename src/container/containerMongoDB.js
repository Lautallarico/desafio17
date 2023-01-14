import mongoose from "mongoose";

class ContainerMongoDB {

    constructor({ name, schema }) {
        this.model = mongoose.model(name, schema)
    }

    async getAll() {
        const response = await this.model.find()
        return response
    }

    async save(element) {
        const response = await this.model.create(element)
        return response
    }

    async getById(id) {
        const response = await this.model.findById(id)
        return response
    }

    async updateById(id, newData) {
        const response = await this.model.findByIdAndUpdate(id, newData, {
            new: true
        })
        return response
    }

    async deleteById(id) {
        const response = await this.model.findByIdAndDelete(id)
        return response
    }

    async getOne(options) {
        const response = await this.model.findOne(options).lean().exec()
        return response
    }
}

export { ContainerMongoDB };