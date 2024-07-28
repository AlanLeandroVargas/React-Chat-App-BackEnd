class User 
{
    username: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    profilePicture: string;
    createdAt: Date;
    constructor(username: string, name: string, lastName: string, email: string, password: string, profilePicture: string, createdAt: Date)
    {
        this.username = username;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.profilePicture = profilePicture;
        this.createdAt = createdAt;
    }
};

export default User;