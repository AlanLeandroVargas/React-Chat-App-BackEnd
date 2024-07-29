import GetChatByIdDTO from "../../../Application/DTO/GetChatByIdDTO";
import IChatDocument from "./IChatDocument";

interface IChatQuery
{
    getChatById(getChatDTO: GetChatByIdDTO): Promise<IChatDocument>;
    getChatsByUserId(userID: string): Promise<Array<IChatDocument>>;
}
export default IChatQuery;