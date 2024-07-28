import ChangePasswordDTO from "../../Application/DTO/ChangePasswordDTO";
import ChangeProfilePictureDTO from "../../Application/DTO/ChangeProfilePictureDTO";
import CreateUserDTO from "../../Application/DTO/CreateUserDTO";
import NotFoundException from "../../Application/Exceptions/NotFoundException";
import IUserCommand from "../Interfaces/User/IUserCommand";
import IUserDocument from "../Interfaces/User/IUserDocument";
import UserModel from "../Persistence/Models/UserModel";
import bcrypt from 'bcrypt';

class UserCommand implements IUserCommand
{
    async registerUser(userDTO: CreateUserDTO): Promise<IUserDocument> {
        const createdUser = new UserModel(userDTO);
        await createdUser.save();
        return createdUser;
    }
    async changePassword(userDTO: ChangePasswordDTO): Promise<IUserDocument> {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(userDTO.newPassword, salt);
        const updatedUser = await UserModel.findByIdAndUpdate(userDTO.id, { password: hashedPassword });
        if(!updatedUser) throw new NotFoundException("Usuario no encontrado");
        return updatedUser;
    }
    async changeProfilePicture(userDTO: ChangeProfilePictureDTO): Promise<IUserDocument> {
        const updatedUser = await UserModel.findByIdAndUpdate(userDTO.id, { profilePicture: userDTO.url });
        if(!updatedUser) throw new NotFoundException('Usuario no encontrado');
        return updatedUser;
    }    
};
export default UserCommand;