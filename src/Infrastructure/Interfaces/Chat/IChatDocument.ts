import { Document } from "mongoose";
import IMessageDocument from "../Message/IMessageDocument";
interface IChatDocument extends Document
{
    participants: Array<string>;
    messages: Array<IMessageDocument>;
}
export default IChatDocument;