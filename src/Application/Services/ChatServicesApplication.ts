import Chat from "../../Domain/Entities/Chat";
import IChatServicesDomain from "../../Domain/Interfaces/IChatServicesDomain";
import GetChatById from "../DTO/GetChatById";
import SendMessageDTO from "../DTO/SendMessageDTO";
import IChatServicesApplication from "../Interfaces/IChatServicesApplication";

class ChatServicesApplication implements IChatServicesApplication
{
    private readonly chatServicesDomain: IChatServicesDomain;
    constructor(chatServicesDomain: IChatServicesDomain)
    {
        this.chatServicesDomain = chatServicesDomain;
    }
    async addMessage(messageDTO: SendMessageDTO): Promise<void> {
        await this.chatServicesDomain.addMessage(messageDTO);
    }
    async getChatById(getChatDTO: GetChatById): Promise<Chat> {
        const retrievedChat = await this.chatServicesDomain.getChatById(getChatDTO);
        return retrievedChat;
    }
    async getChatsByUserId(userId: string): Promise<Array<Chat>> {
        const retrievedChats = await this.chatServicesDomain.getChatsByUserId(userId);
        return retrievedChats;
    }     
}
export default ChatServicesApplication;