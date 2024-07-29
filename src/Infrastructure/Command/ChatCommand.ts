import SendMessageDTO from "../../Application/DTO/SendMessageDTO";
import NotFoundException from "../../Application/Exceptions/NotFoundException";
import Chat from "../../Domain/Entities/Chat";
import IChatCommand from "../Interfaces/Chat/IChatCommand";
import IChatDocument from "../Interfaces/Chat/IChatDocument";
import ChatModel from "../Persistence/Models/ChatModel";

class ChatCommand implements IChatCommand
{
    async createChat(chat: Chat): Promise<IChatDocument> {
        const createdChat = new ChatModel(chat);
        await createdChat.save();
        return createdChat;
    }
    async addMessage(messageDTO: SendMessageDTO): Promise<IChatDocument> {
        const retrievedChat = await ChatModel.findById(messageDTO.chatId);
        if(!retrievedChat) throw new NotFoundException('Chat no encontrado');
        retrievedChat.messages.push(messageDTO.message);
        await retrievedChat.save();
        return retrievedChat;
    }    
};
export default ChatCommand;