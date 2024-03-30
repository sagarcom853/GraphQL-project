import { buildSchema } from "graphql";

const Schema = buildSchema(
    `
    type Product{
        id: ID, 
        name: String, 
        description: String,
        price: Float, 
        soldout: Soldout,
        inventory: Int,
        stores: [Store]!
    }

    enum Soldout{
        SOLDOUT
        ONSALE
    }

    type Store { 
        store : String
    }

    type Query {
        getProduct(id : ID) : Product
        getAllProducts: [Product]
    }

    input StoreInput{
        store : String
    }
    input productInput{
        id: ID, 
        name: String, 
        description: String,
        price: Float, 
        soldout: Soldout,
        inventory: Int,
        stores: [StoreInput]!

    }
    type Mutation {
        createProduct(input : productInput) : Product
        updateProduct(input : productInput) : Product
        deleteProduct(id: ID!): String
      
    }
    `
)
export default Schema