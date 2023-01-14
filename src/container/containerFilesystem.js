
import fs from 'fs'


class ContainerFilesystem {

    constructor(file) {
        this.fileDir = `./src/data/${file}.json`
    }

    async save(element) {
        try {
            const allElements = await this.getAll()
            const lastElementId = allElements.length === 0 ? 1 : allElements[allElements.length - 1].id + 1
            element.id = lastElementId
            allElements.push(element)

            await fs.promises.writeFile(this.fileDir, JSON.stringify(allElements, null, 3))
            return element
        } catch (error) {
            console.log(`El error esta en el SAVE ${error}`);
        }
    }

    async getById(id) {
        try {
            const allElements = await this.getAll()

            const elementById = allElements.find(element => element.id == id)
            return elementById

        } catch (error) {
            console.log(`El error esta en el GETBYID ${error}`);
        }
    }

    async getAll() {
        try {
            const file = await fs.promises.readFile(this.fileDir, 'utf-8')
            const allElements = JSON.parse(file)

            return allElements
            // return this.fileDir
        } catch (error) {

            if (error.code === 'ENOENT') {
                await fs.promises.writeFile(this.fileDir, JSON.stringify([], null, 3));
                return []
            }
            console.log(`El error esta en el GETALL --${error}--`)
        }
    }

    async deleteById(id) {
        try {

            const allElements = await this.getAll()
            const elementById = allElements.find(element => element.id == id)
            if (!elementById) return 'El elemento no fue localizado - Element not found // deleteById //'

            const elementsFilter = allElements.filter(element => element.id != id)

            await fs.promises.writeFile(this.fileDir, JSON.stringify(elementsFilter, null, 3))

        } catch (error) {
            console.log(`El error esta en el DELETEBYID ${error}`);
        }
    }

    async deleteAll() {
        try {
            await fs.promises.writeFile(this.fileDir, JSON.stringify([], null, 3))
        } catch (error) {
            console.log(`El error esta en el DELETEALL ${error}`);
        }
    }

    async getRandom() {
        try {
            const element = await this.getAll()
            return element[Math.floor(Math.random() * element.length)]
        } catch (error) {
            console.log(`El error esta en el GetRandom ${error}`)
        }
    }

    async updateById(id, newData) {
        try {
            const allElements = await this.getAll()

            const foundElementIndex = allElements.findIndex((element) => element.id == id)
            if (foundElementIndex === -1) return null
            const elementFound = allElements[foundElementIndex]

            allElements[foundElementIndex] = { ...elementFound, ...newData }

            await fs.promises.writeFile(this.fileDir, JSON.stringify(allElements, null, 3))
            return elementFound
        } catch (error) {
            console.log(`El error esta en el updateById ${error}`)
        }
    }

}


export { ContainerFilesystem }