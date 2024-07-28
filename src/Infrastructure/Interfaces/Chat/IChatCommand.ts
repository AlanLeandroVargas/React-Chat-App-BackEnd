import SendMessageDTO from "../../../Application/DTO/SendMessageDTO";
import IChatDocument from "./IChatDocument";

interface IChatCommand
{
    addMessage(messageDTO: SendMessageDTO): Promise<IChatDocument>;
}
export default IChatCommand;