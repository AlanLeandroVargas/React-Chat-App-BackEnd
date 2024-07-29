import SendMessageDTO from "../../../Application/DTO/SendMessageDTO";
import Chat from "../../../Domain/Entities/Chat";
import IChatDocument from "./IChatDocument";

interface IChatCommand
{
    createChat(chat: Chat): Promise<IChatDocument>;
    addMessage(messageDTO: SendMessageDTO): Promise<IChatDocument>;
}
export default IChatCommand;