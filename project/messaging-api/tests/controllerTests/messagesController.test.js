const messagesController = require('../../src/controllers/messagesController');
const messagesService = require('../../src/services/messagesService');

jest.mock('../../src/services/messagesService');

describe('MessagesController', () => {
    let req, res;
    beforeEach(() => {
        req = {
        };

        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        jest.clearAllMocks();
    })
    test('getMessagesByUserId', async () => {
        const message = {
        id: 1,
        senderId: 11,
        recipientId: 12,
        content: 'Test message',
        sentTime: Date.now()
        };

        req.params = { id: 11 };
        (messagesService.getMessagesByUserId).mockResolvedValue([message]);

        await messagesController.getMessagesByUserId(req, res);

        expect(messagesService.getMessagesByUserId).toHaveBeenCalledWith(11);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ messages: [message] });
    })

    test('createMessage', async () => {
        const message = {
            id: 1,
            senderId: 11,
            recipientId: 12,
            content: 'Test message',
            sentTime: Date.now()
        }
        req.body = {
                id: 1,
                senderId: 11,
                recipientId: 12,
                content: 'Test message',
                sentTime: Date.now()
        }
        messagesService.createMessage.mockResolvedValue(message);
        await messagesController.createMessage(req, res);
        expect(messagesService.createMessage).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({message});

    });

    test('deleteMessage', async () => {
        req.params = { id: 1 };
        messagesService.deleteMessageById.mockResolvedValue(true);

        await messagesController.deleteMessageById(req, res);

        expect(messagesService.deleteMessageById).toHaveBeenCalledWith(1);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ message: 'Message deleted' });

    });
    test('getMessagesByRecipientId - success', async () => {
        const messages = [{ id: 1, content: 'Hi' }];
        req.params = { senderID: 11, recipientID: 12 };
        messagesService.getMessagesByRecipientId.mockResolvedValue(messages);

        await messagesController.getMessagesByRecipientId(req, res);

        expect(messagesService.getMessagesByRecipientId).toHaveBeenCalledWith(11, 12);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ messages });
    });

    test('getMessagesByRecipientId - success', async () => {
        const messages = [{ id: 1, content: 'Hi' }];
        req.params = { senderID: 11, recipientID: 12 };
        messagesService.getMessagesByRecipientId.mockResolvedValue(messages);

        await messagesController.getMessagesByRecipientId(req, res);

        expect(messagesService.getMessagesByRecipientId).toHaveBeenCalledWith(11, 12);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ messages });
    });

});