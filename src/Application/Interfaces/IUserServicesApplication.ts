import ChangePasswordDTO from "../DTO/ChangePasswordDTO";
import ChangeProfilePictureDTO from "../DTO/ChangeProfilePictureDTO";
import CreateUserDTO from "../DTO/CreateUserDTO";
import LoginDTO from "../DTO/LoginDTO";
import CreatedUserResponse from "../Responses/CreatedUserResponse";

interface IUserServicesApplication
{
    registerUser(userDTO: CreateUserDTO): Promise<CreatedUserResponse>;
    login(userDTO: LoginDTO): Promise<string>;
    changePassword(userDTO: ChangePasswordDTO): Promise<void>;
    changeProfilePicture(userDTO: ChangeProfilePictureDTO): Promise<void>;
}
export default IUserServicesApplication;