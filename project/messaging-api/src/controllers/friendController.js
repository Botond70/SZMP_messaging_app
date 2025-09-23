const friendService = require('../services/friendService');

const getFriendsByUserId = async (req,res) => {

    const {userId} = req.params;
    try{
        const friends = await friendService.getFriendsByUserId(userId);
        res.status(200).json(friends);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

const createFriendByUserId = async (req,res) => {
    const {sender, recipient} = req.params;
    try {
        const newFriend = await friendService.createFriend(sender,recipient);
        res.status(200).json(newFriend);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err: "Failed to create Friend request"});
    }
}

const updateFriendById = async (req,res) => {
    const {id} = req.params;
    const {status} = req.params;
    try{
        const updated = await friendService.updateFriendStatus(id,status);
        if(!updated){
            res.status(404).json({err: "Friend request not found"});
        }
        res.status(200).json(updated);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err: "Failed to update Friend request"});
    }
}

const deleteFriendById = async (req,res) => {
    const {id} = req.params;
    try {
        const deleted = await friendService.deleteFriendById(id);
        if(!deleted){
            res.status(404).json({err: "Friend request not found"});
        }
        res.status(204).send();
    }
    catch(err){
        console.log(err);
        res.status(500).json({err: "Failed to delete Friend request"});
    }

}

module.exports = {
    getFriendsByUserId,
    createFriendByUserId,
    updateFriendById,
    deleteFriendById,
}