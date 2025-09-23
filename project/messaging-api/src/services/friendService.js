const Friend = require('./models/Friend');
const res = require("express/lib/response");

const getAllFriends = () => Friend.findAll();
const getFriendById = () => Friend.findByPk(id);

const createFriend = async (data) =>
{
    try
    {
        const friend = await Friend.create(data);
        return friend
    }
    catch(error)
    {
        throw error;
    }
}

const updateFriend = async (id) =>
{
    const friend = await Friend.findByPk(id);
    if (!friend)
    {
        return null;
    }
    await friend.update(data);
    return true;
}

const deleteFriend = async (id) =>
{
    const friend = await Friend.findByPk(id);
    if (!friend)
    {
        return null;
    }
    await friend.destroy();
    return true;
}

module.exports = 
{
    getAllFriends,
    getFriendById,
    createFriend,
    updateFriend,
    deleteFriend
}