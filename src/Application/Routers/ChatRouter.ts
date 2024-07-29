import { Router } from "express";
import ChatQuery from "../../Infrastructure/Query/ChatQuery";
import ChatCommand from "../../Infrastructure/Command/ChatCommand";
import ChatServicesDomain from "../../Domain/Services/ChatServicesDomain";
import ChatServicesApplication from "../Services/ChatServicesApplication";
import ChatController from "../Controllers/ChatController";

const ChatRouter = Router();
const chatQuery = new ChatQuery();
const chatCommand = new ChatCommand();
const chatServicesDomain = new ChatServicesDomain(chatQuery, chatCommand);
const chatServicesApplication = new ChatServicesApplication(chatServicesDomain);
const chatController = new ChatController(chatServicesApplication);

ChatRouter.post('/chats/send-message', chatController.addMessage);
ChatRouter.get('/chats/get-chat', chatController.getChatById);
ChatRouter.get('/chats/get-chats', chatController.getChatsByUserId);

export default ChatRouter;