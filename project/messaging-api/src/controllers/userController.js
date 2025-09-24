const userService = require('../services/userService');

const getUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({error: 'Failed to get users'});
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    try{
        const user = await userService.getUserById(id);
        if (!user) {
            res.status(404).json({error: 'User not found'});
        }
        res.json(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({error: 'Failed to get user by id'});
    }
}

const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({error: 'Failed to create user'});
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userService.updateUser(id, req.body);
        if (!user) {
            res.status(404).json({error: 'User not found'});
        }
        res.json(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({error: 'Failed to update user'});
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await userService.deleteUser(id);
        if (!deleted) {
            res.status(404).json({error: 'User not found'});
        }
        res.status(200).json({message: 'User deleted successfully'});
    }
    catch (error) {
        console.error(error);
        res.status(500).json({error: 'Failed to delete user'});
    }
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}