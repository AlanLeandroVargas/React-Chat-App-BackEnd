import ChangePasswordDTO from "../../Application/DTO/ChangePasswordDTO";
import ChangeProfilePictureDTO from "../../Application/DTO/ChangeProfilePictureDTO";
import CreateUserDTO from "../../Application/DTO/CreateUserDTO";
import LoginDTO from "../../Application/DTO/LoginDTO";
import IUserDocument from "../../Infrastructure/Interfaces/User/IUserDocument";

interface IUserServicesDomain
{
    registerUser(userDTO: CreateUserDTO): Promise<IUserDocument>;
    login(userDTO: LoginDTO): Promise<string>;
    changePassword(userDTO: ChangePasswordDTO): Promise<void>;
    changeProfilePicture(userDTO: ChangeProfilePictureDTO): Promise<void>;
}
export default IUserServicesDomain;