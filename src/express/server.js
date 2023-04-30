import express from 'express'
import schema from './schema.js';
import { graphqlHTTP } from 'express-graphql'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: {
        clothing: () => {
            return { "id": 123456, "photoUrl": "/test", "type": "SHIRT" }
        }, hello: () => {
            return "test"
        },
        createClothing: ({ photoUrl, type }) => {
            return {
                id: Date.now(),
                photoUrl: photoUrl,
                type: type
            }
        }
    },
    graphiql: true
}))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
