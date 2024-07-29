import GetChatByIdDTO from "../../../Application/DTO/GetChatByIdDTO";
import IChatDocument from "./IChatDocument";

interface IChatQuery
{
    getChatById(getChatDTO: GetChatByIdDTO): Promise<IChatDocument>;
    getChatsByUsername(username: string): Promise<Array<IChatDocument>>;
}
export default IChatQuery;