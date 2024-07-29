import GetChatById from "../../Application/DTO/GetChatById";
import SendMessageDTO from "../../Application/DTO/SendMessageDTO";
import IChatDocument from "../../Infrastructure/Interfaces/Chat/IChatDocument";

interface IChatServicesDomain
{
    addMessage(messageDTO: SendMessageDTO): Promise<void>;
    getChatById(getChatDTO: GetChatById): Promise<IChatDocument>;
    getChatsByUserId(userId: string): Promise<Array<IChatDocument>>;
}
export default IChatServicesDomain;