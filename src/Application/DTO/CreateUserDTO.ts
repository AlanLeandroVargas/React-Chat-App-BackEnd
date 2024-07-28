class CreateUserDTO
{
    username: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    profilePicture: string;
    constructor(username: string, name: string, lastName: string, email: string, password: string, profilePicture: string)
    {
        this.username = username;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.profilePicture = profilePicture;
    }    
};
export default CreateUserDTO;