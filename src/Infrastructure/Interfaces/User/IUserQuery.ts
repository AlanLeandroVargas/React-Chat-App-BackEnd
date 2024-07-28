import IUserDocument from "./IUserDocument";

interface IUserQuery
{
    getUserById(id: string): Promise<IUserDocument>;
    getUserByEmail(email: string): Promise<IUserDocument>;
}
export default IUserQuery;