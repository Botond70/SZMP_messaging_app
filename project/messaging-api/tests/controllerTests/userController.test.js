const userController = require('../../src/controllers/userController');
const userService = require("../../src/services/userService");

jest.mock('../../src/services/userService');

describe('UserController', () => {
    let req, res;
    beforeEach(() => {
        req = {};
        res = {
            status: jest.fn().mockReturnThis(),
            json:jest.fn(),
        };
        jest.clearAllMocks();
    })
    test('getUserById - user found', async () => {
        const user = {id:1, name:'Tester'};
        req.params = {id:1};
        userService.getUserById.mockResolvedValue(user);
        await userController.getUserById(req,res);
        expect(userService.getUserById).toHaveBeenCalledWith(user.id);
        expect(res.json).toHaveBeenCalledWith(user);
    });

    test('getUserById - user not found', async () => {
        req.params = { id: 1 };
        userService.getUserById.mockResolvedValue(null);

        await userController.getUserById(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ error: 'User not found' });
    });

    test('createUser - success', async () => {
        const newUser = {
            id:1,
            name: 'Tester',
            birthdate: new Date("January 1, 2000"),
            password: '123456',
        }
        req.body = {name: 'Tester', birthdate: new Date("January 1, 2000"), password: '123456'};
        userService.createUser.mockResolvedValue(newUser);
        await userController.createUser(req, res);
        expect(userService.createUser).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(newUser);
    })

    test('updateUser - success', async () => {
        const newUser = {
            id:1,
            name: 'Tester',
            birthdate: new Date("January 1, 2000"),
            password: '123456',
        }
        req.params = {
            name: 'Updated Tester',
            birthdate: new Date("January 1, 2001"),
            password: '1234567',
        }
        userService.updateUser.mockResolvedValue(newUser);

        await userController.updateUser(req, res);

        expect(res.json).toHaveBeenCalledWith(newUser);
    })

    test('deleteUser - success', async () => {
        const newUser = {
            id:1,
            name: 'Tester',
            birthdate: new Date("January 1, 2000"),
            password: '123456',
        }
        req.params = {id:1}
        userService.deleteUser.mockResolvedValue(newUser);
        await userController.deleteUser(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({message: 'User deleted successfully'});
    })
});