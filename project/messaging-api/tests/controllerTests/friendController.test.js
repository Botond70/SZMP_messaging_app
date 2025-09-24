const friendController = require('../../src/controllers/friendController');
const friendService = require('../../src/services/friendService');

jest.mock('../../src/services/friendService');

describe('FriendController', () => {
    let req,res;
    beforeEach(() => {
        req = {
        };
        res = {
          status: jest.fn().mockReturnThis(),
          json: jest.fn(),
          send: jest.fn()
        };
        jest.clearAllMocks();
    })

    test('getFriendsByUserId', async () => {
        const friend = [{id:1, senderId: 1, recipientId: 1}];
        req.params = { userId: 1 };
        friendService.getFriendsByUserId.mockResolvedValue(friend);
        await friendController.getFriendsByUserId(req, res);


        expect(friendService.getFriendsByUserId).toHaveBeenCalledWith(1);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(friend);
    })

    test('createFriendByUserId - success', async () => {
        const newFriend = { id: 1, sender: 1, recipient: 2 };
        req.params = { sender: 1, recipient: 2 };
        friendService.createFriendByUserId.mockResolvedValue(newFriend);

        await friendController.createFriendByUserId(req, res);

        expect(friendService.createFriendByUserId).toHaveBeenCalledWith(1, 2);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(newFriend);
    });

    test('updateFriendById ', async () => {
        const updated = { id: 1, status: 'accepted' };
        req.params = { id: 1, status: 'accepted' };
        friendService.updateFriend.mockResolvedValue(updated);

        await friendController.updateFriendById(req, res);

        expect(friendService.updateFriend).toHaveBeenCalledWith(1, 'accepted');
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(updated);
    });

    test('deleteFriendById - success', async () => {
        req.params = { id: 1 };
        friendService.deleteFriend.mockResolvedValue(true);

        await friendController.deleteFriendById(req, res);

        expect(friendService.deleteFriend).toHaveBeenCalledWith(1);
        expect(res.status).toHaveBeenCalledWith(204);
        expect(res.send).toHaveBeenCalled();
    });
});