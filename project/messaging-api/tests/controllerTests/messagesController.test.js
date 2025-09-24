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
});