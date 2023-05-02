import express from 'express'
import { createHandler } from 'graphql-http/lib/use/express';
import schema from './schema.js';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.all('/graphql', createHandler({ schema }));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
