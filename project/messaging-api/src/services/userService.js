const User = require('../models/User');
const res = require("express/lib/response");

const getAllUsers = () => User.findAll();
const getUserById = () => User.findByPk(id);
const createUser = () => User.create(data);
const updateUser = async (id) => {
    const user = await User.findByPk(id);
    if (!user) {
        return null;
    }
    await user.update(data);
    return true;
}
const deleteUser = async (id) => {
    const user = await User.findByPk(id);
    if (!user) {
        return null;
    }
    await user.destroy();
    return true;
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}