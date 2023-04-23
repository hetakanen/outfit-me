import { schema } from './schema.js';
import { createYoga } from 'graphql-yoga';
import { createServer } from 'http'

const port = 3000

const yoga = createYoga({ schema })
const server = createServer(yoga)
server.listen(3000, () => {
    console.info(`Server is running on http://localhost:${port}/graphql`)
})
