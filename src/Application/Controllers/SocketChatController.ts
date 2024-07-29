import { Socket } from "socket.io";
import ISocketChatServicesDomain from "../../Domain/Interfaces/ISocketChatServicesDomain";
import SendMessageDTO from "../DTO/SendMessageDTO";
import Message from "../../Domain/Entities/Message";

class SocketChatController
{
    private readonly socketChatServicesDomain: ISocketChatServicesDomain;
    private socket?: Socket;
    constructor(socketChatServicesDomain: ISocketChatServicesDomain)
    {
        this.socketChatServicesDomain = socketChatServicesDomain;
    }
    setupSocket(socket: Socket)
    {
        console.log('A user connected', socket.id);
        socket.on('join room', (roomId) => {
            socket.join(roomId);
        });
        socket.on('chat message', async (msg, roomId) => {
            const message = new Message(msg.senderUser, msg.content, msg.url, msg.mediaType);
            const messageDTO = new SendMessageDTO(roomId, message);
            await this.socketChatServicesDomain.sendMessage(messageDTO);
            socket.to(roomId).emit(msg);
        });
        socket.on('disconnect', () => {

        });
    }
}
export default SocketChatController;