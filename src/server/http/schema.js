import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLID, GraphQLEnumType } from 'graphql';

var Type = new GraphQLEnumType({
    name: "Type",
    values: {
        SHIRT: { value: 0 },
        TOP: { value: 1 },
        BOTTOM: { value: 2 },
        SOCKS: { value: 3 },
    },
})

var Clothing = new GraphQLObjectType({
    name: "Clothing",
    fields: {
        id: { type: GraphQLID },
        photoUrl: { type: GraphQLString },
        type: { type: Type }
    },
});

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            hello: {
                type: GraphQLString,
                resolve: () => 'test',
            },
            clothing: {
                type: Clothing,
                resolve: () => {
                    return { "id": 123456, "photoUrl": "01.jpg", "type": 0 }
                },
            },
        },
    }),

    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            createClothing: {
                type: Clothing,
                args: {
                    photoUrl: { type: GraphQLString },
                    type: { type: Type }
                },
                resolve: (parent, args) => {
                    return {
                        id: Date.now(),
                        photoUrl: args.photoUrl,
                        type: args.type
                    }
                },
            },
        },
    }),
});
