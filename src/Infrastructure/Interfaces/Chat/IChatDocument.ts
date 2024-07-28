import { Document } from "mongoose";
import Message from "../../../Domain/Entities/Message";
interface IChatDocument extends Document
{
    participants: Array<string>;
    messages: Array<Message>;
}
export default IChatDocument;