import Chat from "../../Domain/Entities/Chat";
import GetChatByIdDTO from "../DTO/GetChatByIdDTO";
import SendMessageDTO from "../DTO/SendMessageDTO";

interface IChatServicesApplication
{
    createChat(participants: Array<string>): Promise<string>;
    addMessage(messageDTO: SendMessageDTO): Promise<void>;
    getChatById(getChatDTO: GetChatByIdDTO): Promise<Chat>;
    getChatsByUsername(userId: string): Promise<Array<Chat>>;
}
export default IChatServicesApplication;