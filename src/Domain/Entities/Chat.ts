import Message from "./Message";

class Chat 
{
    participants: Array<string>;
    messages: Array<Message>;
    constructor(participants: Array<string>)
    {
        this.participants = participants;
        this.messages = new Array<Message>();
    };
}
export default Chat;