import { Document } from "mongoose"
interface IUserDocument extends Document
{
    username: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    profilePicture: string;    
    createdAt: Date;
    comparePassword(password: string): Promise<boolean>;
}
export default IUserDocument;