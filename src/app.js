import express from 'express';
import pqrsRoutes from './routes/pqrsRoutes.js';

const app = express()
const port = 3000

app.use(express.json());

app.use('/pqrs', pqrsRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})