const Friend = require('../models/Friend');
const res = require("express/lib/response");


const getAllFriends = () => Friend.findAll();
const getFriendById = () => Friend.findByPk(id);

const getFriendsByUserId = async (id) => {
    try{
        const friends = await Friend.findAll(
            {
                where: {
                    sender: id,
                }
            }
        );
        return friends;

    }catch(err){
        throw err;
    }
}

const createFriendByUserId = async (data) =>
{
    try
    {
        const friend = await Friend.create(data);
        return friend;
    }
    catch(error)
    {
        throw error;
    }
}

const updateFriend = async (id,data) =>
{
    const friend = await Friend.findByPk(id);
    if (!friend)
    {
        return false;
    }
    await friend.update(data);
    return true;
}

const deleteFriend = async (id) =>
{
    const friend = await Friend.findByPk(id);
    if (!friend)
    {
        return false;
    }
    await friend.destroy();
    return true;
}

module.exports = 
{
    getAllFriends,
    getFriendById,
    createFriendByUserId,
    getFriendsByUserId,
    updateFriend,
    deleteFriend
}