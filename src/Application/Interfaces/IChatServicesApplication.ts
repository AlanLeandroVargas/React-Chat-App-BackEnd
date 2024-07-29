import Chat from "../../Domain/Entities/Chat";
import GetChatByIdDTO from "../DTO/GetChatByIdDTO";
import SendMessageDTO from "../DTO/SendMessageDTO";

interface IChatServicesApplication
{
    addMessage(messageDTO: SendMessageDTO): Promise<void>;
    getChatById(getChatDTO: GetChatByIdDTO): Promise<Chat>;
    getChatsByUserId(userId: string): Promise<Array<Chat>>;
}
export default IChatServicesApplication;