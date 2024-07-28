import express from 'express';
import MongoDB from './Infrastructure/Persistence/Config/MongoDB';

MongoDB();
const app = express();

app.use(express.json());
app.use('/', (req, res) => res.send('Hola mundo'));

export default app;