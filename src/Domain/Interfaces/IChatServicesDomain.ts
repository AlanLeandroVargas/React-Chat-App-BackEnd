import GetChatByIdDTO from "../../Application/DTO/GetChatByIdDTO";
import SendMessageDTO from "../../Application/DTO/SendMessageDTO";
import IChatDocument from "../../Infrastructure/Interfaces/Chat/IChatDocument";

interface IChatServicesDomain
{
    createChat(participants: Array<string>): Promise<IChatDocument>;
    addMessage(messageDTO: SendMessageDTO): Promise<void>;
    getChatById(getChatDTO: GetChatByIdDTO): Promise<IChatDocument>;
    getChatsByUsername(username: string): Promise<Array<IChatDocument>>;
}
export default IChatServicesDomain;