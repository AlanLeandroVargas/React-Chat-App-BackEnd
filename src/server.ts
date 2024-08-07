import { app, chatApp } from "./app";
import { Server } from "socket.io";
import { createServer } from 'node:http';
import SocketChatServicesDomain from "./Domain/Services/SocketChatServicesDomain";
import SocketChatController from "./Application/Controllers/SocketChatController";
import {chatServicesDomain} from './Application/Routers/ChatRouter';


const port = process.env.PORT || 3001;
app.listen(port, () => { console.log(`El servidor esta corriendo en el puerto ${port}`) });

const chatAppPort = 3002;
const server = createServer(chatApp)
const io = new Server(server);
server.listen(chatAppPort, () => {
    console.log(`El servidor del chat esta corriendo en el puerto ${chatAppPort}`);
});
const socketChatServicesDomain = new SocketChatServicesDomain(chatServicesDomain);
const socketChatController = new SocketChatController(socketChatServicesDomain);

io.on('connect', (socket) => {
    socketChatController.setupSocket(socket);
});
export default io;
