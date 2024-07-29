import express from 'express';
import MongoDB from './Infrastructure/Persistence/Config/MongoDB';
import requestLogger from './Application/Middleware/RequestLogger';
import UserRouter from './Application/Routers/UserRouter';
import ChatRouter from './Application/Routers/ChatRouter';
import errorHandler from './Application/Middleware/ErrorHandler';

MongoDB();
const app = express();

app.use(express.json());
app.use(requestLogger);
app.use('/api', UserRouter);
app.use('/api', ChatRouter);
app.use(errorHandler);

const chatApp = express();

export {app, chatApp};