class Message
{
    senderUser: string;
    content?: string;
    url?: string;
    mediaType?: string;
    constructor(senderUser: string, content?: string, url?: string, mediaType?: string)
    {
        this.senderUser = senderUser;
        this.content = content;
        this.url = url;
        this.mediaType = mediaType;
    };
};
export default Message;