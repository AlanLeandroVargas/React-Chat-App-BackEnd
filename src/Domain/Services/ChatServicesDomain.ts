import GetChatByIdDTO from "../../Application/DTO/GetChatByIdDTO";
import SendMessageDTO from "../../Application/DTO/SendMessageDTO";
import IChatCommand from "../../Infrastructure/Interfaces/Chat/IChatCommand";
import IChatDocument from "../../Infrastructure/Interfaces/Chat/IChatDocument";
import IChatQuery from "../../Infrastructure/Interfaces/Chat/IChatQuery";
import Chat from "../Entities/Chat";
import IChatServicesDomain from "../Interfaces/IChatServicesDomain";

class ChatServicesDomain implements IChatServicesDomain
{
    private readonly chatQuery: IChatQuery;
    private readonly chatCommand: IChatCommand;
    constructor(chatQuery: IChatQuery, chatCommand: IChatCommand)
    {
        this.chatQuery = chatQuery;
        this.chatCommand = chatCommand;
    }
    async createChat(participants: Array<string>): Promise<IChatDocument> {
        const chatInstance = new Chat(participants);
        const createdChat = await this.chatCommand.createChat(chatInstance);
        return createdChat;
    }
    async addMessage(messageDTO: SendMessageDTO): Promise<void> {
        await this.chatCommand.addMessage(messageDTO);
    }
    async getChatById(getChatDTO: GetChatByIdDTO): Promise<IChatDocument> {
        const retrievedChat = await this.chatQuery.getChatById(getChatDTO);
        return retrievedChat;
    }
    async getChatsByUsername(userId: string): Promise<Array<IChatDocument>> {
        const retrievedChats = await this.chatQuery.getChatsByUsername(userId);
        return retrievedChats;
    }    
}
export default ChatServicesDomain;