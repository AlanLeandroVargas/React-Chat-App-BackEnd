import { Request, Response, NextFunction } from "express";
import IChatServicesApplication from "../Interfaces/IChatServicesApplication";
import SendMessageDTO from "../DTO/SendMessageDTO";
import GetChatByIdDTO from "../DTO/GetChatByIdDTO";

class ChatController
{
    private readonly chatServicesApplication: IChatServicesApplication;
    constructor(chatServicesApplication: IChatServicesApplication)
    {
        this.chatServicesApplication = chatServicesApplication;
        this.createChat = this.createChat.bind(this);
        this.addMessage = this.addMessage.bind(this);
        this.getChatById = this.getChatById.bind(this);
        this.getChatsByUsername = this.getChatsByUsername.bind(this);
    }
    async createChat(req: Request, res: Response, next: NextFunction): Promise<void>
    {
        try
        {
            const { participants } = req.body;
            const chatId = await this.chatServicesApplication.createChat(participants);
            res.status(201).send(chatId);
        }
        catch(error)
        {
            next(error);
        }
    }
    async addMessage(req: Request, res: Response, next: NextFunction): Promise<void>
    {
        try
        {
            const { chatId, message } = req.body;
            const messageDTO = new SendMessageDTO(chatId, message);
            await this.chatServicesApplication.addMessage(messageDTO);
            res.status(200);
        }
        catch(error)
        {
            next(error);
        }
    }
    async getChatById(req: Request, res: Response, next: NextFunction): Promise<void>
    {
        try
        {
            const { id, participantId } = req.body;
            const getChatDTO = new GetChatByIdDTO(id, participantId);
            const retrievedChat = await this.chatServicesApplication.getChatById(getChatDTO);
            res.status(200).send(retrievedChat);
        }
        catch(error)
        {
            next(error);
        }
    }
    async getChatsByUsername(req: Request, res: Response, next: NextFunction): Promise<void>
    {
        try
        {
            const username = req.query.username;
            const retrievedChats = await this.chatServicesApplication.getChatsByUsername(username as string);
            res.status(200).send(retrievedChats);
        }
        catch(error)
        {
            next(error);
        }
    }
}
export default ChatController;