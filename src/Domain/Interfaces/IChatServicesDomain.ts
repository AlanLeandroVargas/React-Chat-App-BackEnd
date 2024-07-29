import GetChatByIdDTO from "../../Application/DTO/GetChatByIdDTO";
import SendMessageDTO from "../../Application/DTO/SendMessageDTO";
import IChatDocument from "../../Infrastructure/Interfaces/Chat/IChatDocument";

interface IChatServicesDomain
{
    addMessage(messageDTO: SendMessageDTO): Promise<void>;
    getChatById(getChatDTO: GetChatByIdDTO): Promise<IChatDocument>;
    getChatsByUsername(username: string): Promise<Array<IChatDocument>>;
}
export default IChatServicesDomain;