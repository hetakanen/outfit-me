import express from 'express'
import schema from './schema.js';
import { graphqlHTTP } from 'express-graphql'
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: {
        clothing: () => {
            return { "id": 123456, "photoUrl": "01.jpg", "type": "SHIRT" }
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
