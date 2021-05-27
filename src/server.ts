import express from 'express';
import { router } from './routes/index';

const server = express();

server.use(express.json(), router);

server.listen(3333, () => console.log('Server is running'));
