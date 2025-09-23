const Message = require('../models/Messages');
const res = require("express/lib/response");

const getAllMessages = () => Message.findAll();
const getMessageById = () => Message.findByPk(id);


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


const updateMessage = async (id) =>
{
    const message = await Message.findByPk(id);

    if (!message)
    {
        return null;

    }
    await message.update(data);
    return true;

}


const deleteMessage = async (id) =>
{
    const message = await Message.findByPk(id);

    if (!message)
    {
        return null;

    }
    await message.destroy(data);
    return true;
}

module.exports = 
{
    getAllMessages,
    getMessageById,
    createMessage,
    updateMessage,
    deleteMessage

}