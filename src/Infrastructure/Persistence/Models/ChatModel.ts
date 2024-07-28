import mongoose, { Schema } from "mongoose";
import IChatDocument from "../../Interfaces/Chat/IChatDocument";
import Message from "../../../Domain/Entities/Message";

const chatSchema: Schema<IChatDocument> = new mongoose.Schema
(    
    {
        participants: {type: [String], required: true},
        messages: {type: [Message]}
    }
);

const ChatModel = mongoose.model('Chats', chatSchema);
export default ChatModel;