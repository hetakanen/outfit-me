import { makeExecutableSchema } from '@graphql-tools/schema'

const typeDefinitions = /* GraphQL */ `
  enum Type {
    SHIRT,
    TOP,
    BOTTOM,
    SOCKS,
  },
  type Clothing {
    id: String,
    photoUrl: String,
    type: Type
  },
  type Query {
    hello: String!,
    clothing: Clothing!
  }
  type Mutation {
    postClothing( photoUrl: String!,  type: Type!): Clothing!
  }
`
const defaultClothing = { id: 123456, photoUrl: "/test", type: "SHIRT" };

const resolvers = {
  Query: {
    hello: () => 'Hello World!',
    clothing: () => defaultClothing
  },
  Clothing: {
    id: (parent) => parent.id,
    photoUrl: (parent) => parent.photoUrl,
    type: (parent) => parent.type
  },
  Mutation: {
    postClothing: (parent, args) => {
      return {
        id: Date.now(),
        photoUrl: args.photoUrl,
        type: args.type
      }
    }
  }
}

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions]
})
