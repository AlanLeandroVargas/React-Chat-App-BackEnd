import { Request, Response, NextFunction } from "express";
import IUserServicesApplication from "../Interfaces/IUserServicesApplication";
import CreateUserDTO from "../DTO/CreateUserDTO";
import LoginDTO from "../DTO/LoginDTO";
import ChangePasswordDTO from "../DTO/ChangePasswordDTO";

class UserController
{
    private readonly userServicesApplication: IUserServicesApplication;
    constructor(userServicesApplication: IUserServicesApplication)
    {
        this.userServicesApplication = userServicesApplication
    }
    async registerUser(req: Request, res: Response, next: NextFunction): Promise<void>
    {
        try
        {
            const { username, name, lastName, email, password, profilePicture } = req.body;
            const userDTO = new CreateUserDTO(username, name, lastName, email, password, profilePicture);
            const registeredUser = await this.userServicesApplication.registerUser(userDTO);
            res.status(201).send(registeredUser);
        }
        catch(error)
        {
            next(error);
        }
    }
    async login(req: Request, res: Response, next: NextFunction): Promise<void>
    {
        try
        {
            const { email, password } = req.body;
            const userDTO = new LoginDTO(email, password);
            const token = await this.userServicesApplication.login(userDTO);
            res.status(200).send(token);
        }
        catch(error)
        {
            next(error);
        }
    }
    async changePassword(req: Request, res: Response, next: NextFunction): Promise<void>
    {
        try
        {
            const { id, currentPassword, newPassword } = req.body;
            const userDTO = new ChangePasswordDTO(id, currentPassword, newPassword);
            await this.userServicesApplication.changePassword(userDTO);
            res.status(200);
        }
        catch(error)
        {
            next(error);
        }
    }
    async changeProfilePicture(req: Request, res: Response, next: NextFunction): Promise<void>
    {
        try
        {
            //TODO         
        }
        catch(error)
        {
            next(error);
        }
    }
}
export default UserController;