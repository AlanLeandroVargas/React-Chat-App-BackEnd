import Message from "../../Domain/Entities/Message";

class SendMessageDTO
{
    chatId: string;
    message: Message;
    constructor(chatId: string, message: Message)
    {
        this.chatId = chatId;
        this.message = message;
    }
}
export default SendMessageDTO;
