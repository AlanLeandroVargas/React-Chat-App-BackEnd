import Chat from "../../Domain/Entities/Chat";
import IChatServicesDomain from "../../Domain/Interfaces/IChatServicesDomain";
import GetChatByIdDTO from "../DTO/GetChatByIdDTO";
import SendMessageDTO from "../DTO/SendMessageDTO";
import IChatServicesApplication from "../Interfaces/IChatServicesApplication";

class ChatServicesApplication implements IChatServicesApplication
{
    private readonly chatServicesDomain: IChatServicesDomain;
    constructor(chatServicesDomain: IChatServicesDomain)
    {
        this.chatServicesDomain = chatServicesDomain;
    }
    async createChat(participants: Array<string>): Promise<string> {
        const createdChat = await this.chatServicesDomain.createChat(participants);
        return createdChat.id;
    }
    async addMessage(messageDTO: SendMessageDTO): Promise<void> {
        await this.chatServicesDomain.addMessage(messageDTO);
    }
    async getChatById(getChatDTO: GetChatByIdDTO): Promise<Chat> {
        const retrievedChat = await this.chatServicesDomain.getChatById(getChatDTO);
        return retrievedChat;
    }
    async getChatsByUsername(username: string): Promise<Array<Chat>> {
        const retrievedChats = await this.chatServicesDomain.getChatsByUsername(username);
        return retrievedChats;
    }     
}
export default ChatServicesApplication;