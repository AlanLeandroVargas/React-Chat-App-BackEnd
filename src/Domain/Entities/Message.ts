class Message
{
    senderUser: string;
    content?: string;
    url?: string;
    mediaType?: string;
    createdAt: Date
    constructor(senderUser: string, content?: string, url?: string, mediaType?: string)
    {
        this.senderUser = senderUser;
        this.content = content;
        this.url = url;
        this.mediaType = mediaType;
        this.createdAt = new Date();
    };
};
export default Message;