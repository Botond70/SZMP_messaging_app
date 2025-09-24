const Message = require('../models/Messages');
const res = require("express/lib/response");

const getAllMessages = () => Message.findAll();
const getMessageById = (id) => Message.findByPk(id);

const getMessagesByUserId = (id) => {
    return Message.findAll(
        {
            where: {
                senderID: id
            }
        }
    );
};

const getMessagesByRecipientId = (sId, rId) => {
    return Message.findAll(
        {
            where: {
                senderID: sId,
                recipientID: rId
            }
        }
    );
};

const createMessage = async (data) => 
{
    try
    {
        const message = await Message.create(data);
        return message;
    }
    catch(error)
    {
        throw error;
    }
}


const updateMessage = async (id,data) =>
{
    const message = await Message.findByPk(id);
    if (!message)
    {
        return false;
    }
    await message.update(data);
    return true;

}


const deleteMessageById = async (id) =>
{
    const message = await Message.findByPk(id);

    if (!message)
    {
        return false;
    }
    await message.destroy();
    return true;
}

module.exports = 
{
    getMessagesByRecipientId,
    getMessagesByUserId,
    getAllMessages,
    getMessageById,
    createMessage,
    updateMessage,
    deleteMessageById

}