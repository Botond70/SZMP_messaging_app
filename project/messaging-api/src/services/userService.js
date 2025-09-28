const User = require('../models/user');

const getAllUsers = () => User.findAll();
const getUserById = (id) => User.findByPk(id);

const createUser = async (data) => {
    try {
        const user = await User.create(data);
        return user;
    }
    catch (err) {
        throw err;
    }
}
const updateUser = async (id, data) => {
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
        return false;
    }
    await user.destroy();
    return true;
}

const getUserByName = async (name) => {
    return await User.findOne({ where: { name } });
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUserByName,
}