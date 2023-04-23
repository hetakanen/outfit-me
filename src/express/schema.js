import { buildSchema } from "graphql";

export default buildSchema(`
    type Clothing {
        id: ID
        photoUrl: String
        type: String
    }

    type Query {
        clothing: Clothing
        hello: String
    }
`)
