const User = require('../models/User');

const getAllUsers = () => User.findAll();
const getUserById = () => User.findByPk(id);
const createUser = async (data) => {
    try{
        const user = await User.create(data);
        return user;
    }
    catch(err){
        throw err;
    }
}
const updateUser = async (id,data) => {
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

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}