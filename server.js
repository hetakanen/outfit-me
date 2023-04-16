import express from 'express'
import { createHandler } from 'graphql-http/lib/use/express';
import schemaDeprecated from './schema-deprecated.js';
import schemaNew from './schema-new.js';
import { graphqlHTTP } from 'express-graphql'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/graphql-deprecated', graphqlHTTP({
    schema: schemaDeprecated,
    rootValue: {
        clothing: () => {
            return { "id": 123456, "photoUrl": "/test", "type": "SHIRT" }
        }, hello: () => {
            return "test"
        }
    },
    graphiql: true
}))

app.all('/graphql-new', createHandler({ schema: schemaNew }));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
