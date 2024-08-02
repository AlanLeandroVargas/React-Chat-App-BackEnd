import mongoose, { Schema } from "mongoose";
import IChatDocument from "../../Interfaces/Chat/IChatDocument";

const chatSchema: Schema<IChatDocument> = new mongoose.Schema
(    
    {
        participants: {type: [String], required: true},
        messages: {type: [Object]}
    }
);

const ChatModel = mongoose.model('Chats', chatSchema);
export default ChatModel;