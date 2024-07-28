import NotFoundException from "../../Application/Exceptions/NotFoundException";
import IUserDocument from "../Interfaces/User/IUserDocument";
import IUserQuery from "../Interfaces/User/IUserQuery";
import UserModel from "../Persistence/Models/UserModel";

class UserQuery implements IUserQuery
{
    async getUserById(id: string): Promise<IUserDocument> {
        const retrievedUser = await UserModel.findOne( { _id: id } );
        if(!retrievedUser) throw new NotFoundException('Usuario no encontrado');
        return retrievedUser;        
    }
    async getUserByEmail(email: string): Promise<IUserDocument> {
        const retrievedUser = await UserModel.findOne( { email: email } );
        if(!retrievedUser) throw new NotFoundException('Usuario no encontrado');
        return retrievedUser; 
    }    
};
export default UserQuery;