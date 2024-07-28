import NotFoundException from "../../Application/Exceptions/NotFoundException";
import IChatDocument from "../Interfaces/Chat/IChatDocument";
import IChatQuery from "../Interfaces/Chat/IChatQuery";
import ChatModel from "../Persistence/Models/ChatModel";

class ChatQuery implements IChatQuery
{
    async getChatById(id: string): Promise<IChatDocument> {
        const retrievedChat = await ChatModel.findOne( { _id: id } );
        if(!retrievedChat) throw new NotFoundException('Chat no encontrado');
        return retrievedChat;
    }
    async getChatsByUserId(userID: string): Promise<Array<IChatDocument>> {
        const retrievedChats = await ChatModel.find( {participants: userID} );
        if(!retrievedChats) throw new NotFoundException('No se encontro ningun chat');
        return retrievedChats;
    }    
};
export default ChatQuery;