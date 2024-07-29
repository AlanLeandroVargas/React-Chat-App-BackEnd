import SendMessageDTO from "../../Application/DTO/SendMessageDTO";

interface ISocketChatServicesDomain
{
    sendMessage(messageDTO: SendMessageDTO): Promise<void>;    
}
export default ISocketChatServicesDomain;