import ChangePasswordDTO from "../../../Application/DTO/ChangePasswordDTO";
import ChangeProfilePictureDTO from "../../../Application/DTO/ChangeProfilePictureDTO";
import CreateUserDTO from "../../../Application/DTO/CreateUserDTO";
import IUserDocument from "./IUserDocument";

interface IUserCommand
{
    registerUser(userDTO: CreateUserDTO): Promise<IUserDocument>;
    changePassword(userDTO: ChangePasswordDTO): Promise<IUserDocument>;
    changeProfilePicture(userDTO: ChangeProfilePictureDTO): Promise<IUserDocument>;
}
export default IUserCommand;