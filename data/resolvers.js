import { Widgets } from "./dbConnectors";


class Product {
    constructor(id, { name, description, price, soldout, stores, inventory }) {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.soldout = soldout
        this.stores = stores
        this.inventory = inventory
    }
}

const productDatabase = {}
const resolvers = {
    getProduct: async ({ id }) => {
        try {
            const product = await Widgets.findById(id)
            return product
        } catch (error) {
            throw new Error(error)
        }
    },

    getAllProducts: async () => {
        try {
            return await Widgets.find({})
        }
        catch (error) {
            throw new Error(error)
        }
    },

    // getProduct: ({ id }) => {
    //     return new Product(id, productDatabase[id])
    // },

    createProduct: async ({ input }) => {
        // let id = require('crypto').randomBytes(10).toString('hex')
        // productDatabase[id] = input
        // return new Product(id, input)
        const newWidget = new Widgets({
            name: input.name,
            description: input.description,
            price: input.price,
            soldout: input.soldout,
            inventory: input.inventory,
            stores: input.stores,
        })
        newWidget.id = newWidget._id
        try {
            await newWidget.save()
            return newWidget
        } catch (error) {
            throw new Error(error)
        }
    },

    updateProduct: async ({ input }) => {
        try {
            const updateWidget = await Widgets.findOneAndUpdate({ _id: input }, input, { new: true })
            return updateWidget;
        } catch (error) {
            throw new Error(error)
        }
    },

    deleteProduct: async ({ id }) => {
        try {
            await Widgets.deleteOne({ _id: id })
            return "Succesfullyy deleted widget"
        }
        catch (error) {
            throw new Error(error)
        }
    }






}

export default resolvers