import IChatDocument from "./IChatDocument";

interface IChatQuery
{
    getChatById(id: string): Promise<IChatDocument>;
    getChatsByUserId(userID: string): Promise<Array<IChatDocument>>;
}
export default IChatQuery;