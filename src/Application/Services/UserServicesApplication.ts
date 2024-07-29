import IUserServicesDomain from "../../Domain/Interfaces/IUserServicesDomain";
import ChangePasswordDTO from "../DTO/ChangePasswordDTO";
import ChangeProfilePictureDTO from "../DTO/ChangeProfilePictureDTO";
import CreateUserDTO from "../DTO/CreateUserDTO";
import LoginDTO from "../DTO/LoginDTO";
import IUserServicesApplication from "../Interfaces/IUserServicesApplication";
import CreatedUserResponse from "../Responses/CreatedUserResponse";

class UserServicesApplication implements IUserServicesApplication
{
    private readonly userServicesDomain: IUserServicesDomain;
    constructor(userServicesDomain: IUserServicesDomain)
    {
        this.userServicesDomain = userServicesDomain;
    }
    async registerUser(userDTO: CreateUserDTO): Promise<CreatedUserResponse> {
        const registeredUser = await this.userServicesDomain.registerUser(userDTO);
        const createdUserResponse = new CreatedUserResponse(registeredUser.id, registeredUser.username);
        return createdUserResponse;
    }
    async login(userDTO: LoginDTO): Promise<string> {
        const token = await this.userServicesDomain.login(userDTO);
        return token;
    }
    async changePassword(userDTO: ChangePasswordDTO): Promise<void> {
        await this.userServicesDomain.changePassword(userDTO);
    }
    async changeProfilePicture(userDTO: ChangeProfilePictureDTO): Promise<void> {
        await this.userServicesDomain.changeProfilePicture(userDTO);
    }    
}
export default UserServicesApplication;