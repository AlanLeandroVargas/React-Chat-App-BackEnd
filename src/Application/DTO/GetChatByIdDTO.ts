class GetChatByIdDTO
{
    id: string;
    participantId: string;
    constructor(id: string, participantId: string)
    {
        this.id = id;
        this.participantId = participantId;
    }
}
export default GetChatByIdDTO;