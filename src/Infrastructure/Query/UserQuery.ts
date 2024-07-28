import IUserDocument from "../Interfaces/User/IUserDocument";
import IUserQuery from "../Interfaces/User/IUserQuery";

class UserQuery implements IUserQuery
{
    getUserById(id: string): Promise<IUserDocument> {
        throw new Error("Method not implemented.");
    }
    getUserByEmail(email: string): Promise<IUserDocument> {
        throw new Error("Method not implemented.");
    }    
}
export default UserQuery;