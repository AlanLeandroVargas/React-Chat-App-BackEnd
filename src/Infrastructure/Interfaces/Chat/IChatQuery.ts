import GetChatById from "../../../Application/DTO/GetChatById";
import IChatDocument from "./IChatDocument";

interface IChatQuery
{
    getChatById(getChatDTO: GetChatById): Promise<IChatDocument>;
    getChatsByUserId(userID: string): Promise<Array<IChatDocument>>;
}
export default IChatQuery;