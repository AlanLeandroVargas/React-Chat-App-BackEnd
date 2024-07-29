import Chat from "../../Domain/Entities/Chat";
import GetChatById from "../DTO/GetChatById";
import SendMessageDTO from "../DTO/SendMessageDTO";

interface IChatServicesApplication
{
    addMessage(messageDTO: SendMessageDTO): Promise<void>;
    getChatById(getChatDTO: GetChatById): Promise<Chat>;
    getChatsByUserId(userId: string): Promise<Array<Chat>>;
}
export default IChatServicesApplication;