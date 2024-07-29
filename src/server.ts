import { app, chatApp } from "./app";
import { Server } from "socket.io";
import { createServer } from 'node:http';


const port = process.env.PORT || 3001;
app.listen(port, () => { console.log(`El servidor esta corriendo en el puerto ${port}`) });

const chatAppPort = 3002;
const server = createServer(chatApp)
const io = new Server(server);
server.listen(chatAppPort, () => 
    {
        console.log(`El servidor del chat esta corriendo en el puerto ${chatAppPort}`);
    });
export default io;
