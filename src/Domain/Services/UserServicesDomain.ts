import ChangePasswordDTO from "../../Application/DTO/ChangePasswordDTO";
import ChangeProfilePictureDTO from "../../Application/DTO/ChangeProfilePictureDTO";
import CreateUserDTO from "../../Application/DTO/CreateUserDTO";
import LoginDTO from "../../Application/DTO/LoginDTO";
import ValidationException from "../../Application/Exceptions/ValidationException";
import IUserCommand from "../../Infrastructure/Interfaces/User/IUserCommand";
import IUserDocument from "../../Infrastructure/Interfaces/User/IUserDocument";
import IUserQuery from "../../Infrastructure/Interfaces/User/IUserQuery";
import IUserServicesDomain from "../Interfaces/IUserServicesDomain";
import jwt from "jsonwebtoken";

const JWT_SECRET = 'your_very_secure_and_long_random_string';

class UserServicesDomain implements IUserServicesDomain
{
    private readonly userQuery: IUserQuery;
    private readonly userCommand: IUserCommand;
    constructor(userQuery: IUserQuery, userCommand: IUserCommand)
    {
        this.userQuery = userQuery;
        this.userCommand = userCommand;
    }
    async registerUser(userDTO: CreateUserDTO): Promise<IUserDocument> {
        const createdUser = await this.userCommand.registerUser(userDTO);
        return createdUser;
    }
    async login(userDTO: LoginDTO): Promise<string> {
        const retrievedUser = await this.userQuery.getUserByEmail(userDTO.email);
        const isMatch = await retrievedUser.comparePassword(userDTO.password);
        if(!isMatch) throw new ValidationException('Credenciales invalidas');
        const payload = { id: retrievedUser.id };
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
        return token;
    }
    async changePassword(userDTO: ChangePasswordDTO): Promise<void> {
        const updatedUser = await this.userCommand.changePassword(userDTO);
    }
    async changeProfilePicture(userDTO: ChangeProfilePictureDTO): Promise<void> {
        const updatedUser = await this.userCommand.changeProfilePicture(userDTO);
    }    
}
export default UserServicesDomain;