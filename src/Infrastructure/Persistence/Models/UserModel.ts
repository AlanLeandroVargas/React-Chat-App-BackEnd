import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import IUserDocument from '../../Interfaces/User/IUserDocument';

const userSchema: Schema<IUserDocument> = new mongoose.Schema
(
    {
        username: {type: String, required: true},
        name: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        profilePicture: {type: String, required: true},
        createdAt: {type: Date, default: Date.now}
    }
);
userSchema.pre<IUserDocument>('save', async function (next)
{
    if(!this.isModified('password'))
        {
            return next();
        }
    try
    {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }
    catch(error)
    {
        next();
    }
});
userSchema.methods.comparePassword = function (password: string): Promise<boolean>
{
    return bcrypt.compare(password, this.password);
}
const UserModel = mongoose.model('Users', userSchema);
export default UserModel;
