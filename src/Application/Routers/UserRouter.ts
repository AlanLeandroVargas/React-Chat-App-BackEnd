import { Router } from "express";
import UserServicesDomain from "../../Domain/Services/UserServicesDomain";
import UserQuery from "../../Infrastructure/Query/UserQuery";
import UserCommand from "../../Infrastructure/Command/UserCommand";
import UserServicesApplication from "../Services/UserServicesApplication";
import UserController from "../Controllers/UserController";

const UserRouter = Router();
const userQuery = new UserQuery();
const userCommand = new UserCommand();
const userServicesDomain = new UserServicesDomain(userQuery, userCommand);
const userServicesApplication = new UserServicesApplication(userServicesDomain);
const userController = new UserController(userServicesApplication);
UserRouter.post('/users/register', userController.registerUser);
UserRouter.post('/users/login', userController.login);
UserRouter.put('/users/change-password', userController.changePassword);

export default UserRouter;