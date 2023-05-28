const typeDefs = `#graphql
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
        createClothing( photoUrl: String!,  type: Type!): Clothing!
    }
`;

const defaultClothing = { id: 123456, photoUrl: "01.jpg", type: "SHIRT" };

const resolvers = {
    Query: {
        hello: () => 'world',
        clothing: () => defaultClothing
    },
    Mutation: {
        createClothing: async (_, { photoUrl, type }, __) => {
            return {
                id: Date.now(),
                photoUrl: photoUrl,
                type: type
            };
        },
    }
};

export { typeDefs, resolvers };
