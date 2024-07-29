import GetChatByIdDTO from "../../Application/DTO/GetChatByIdDTO";
import NotFoundException from "../../Application/Exceptions/NotFoundException";
import UnauthorizedException from "../../Application/Exceptions/UnauthorizedException";
import IChatDocument from "../Interfaces/Chat/IChatDocument";
import IChatQuery from "../Interfaces/Chat/IChatQuery";
import ChatModel from "../Persistence/Models/ChatModel";

class ChatQuery implements IChatQuery
{
    async getChatById(getChatDTO: GetChatByIdDTO): Promise<IChatDocument> {
        const retrievedChat = await ChatModel.findOne( { _id: getChatDTO.id } );        
        if(!retrievedChat) throw new NotFoundException('Chat no encontrado');
        if(!retrievedChat.participants.includes(getChatDTO.participantId)) throw new UnauthorizedException('No se puede acceder a un chat del que no se sea participante');
        return retrievedChat;
    }
    async getChatsByUserId(userId: string): Promise<Array<IChatDocument>> {
        const retrievedChats = await ChatModel.find( {participants: userId} );
        if(!retrievedChats) throw new NotFoundException('No se encontro ningun chat');
        return retrievedChats;
    }    
};
export default ChatQuery;