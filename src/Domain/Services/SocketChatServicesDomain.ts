import SendMessageDTO from "../../Application/DTO/SendMessageDTO";
import IChatServicesDomain from "../Interfaces/IChatServicesDomain";
import ISocketChatServicesDomain from "../Interfaces/ISocketChatServicesDomain";

class SocketChatServicesDomain implements ISocketChatServicesDomain
{
    private readonly chatServicesDomain: IChatServicesDomain;
    constructor(chatServicesDomain: IChatServicesDomain)
    {
        this.chatServicesDomain = chatServicesDomain;
    }
    async sendMessage(messageDTO: SendMessageDTO): Promise<void> {
        await this.chatServicesDomain.addMessage(messageDTO);
    }    
}
export default SocketChatServicesDomain;