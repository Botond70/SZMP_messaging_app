const { Op } = require('sequelize');
const Message = require('../models/messages');

const getAllMessages = () => Message.findAll();
const getMessageById = (id) => Message.findByPk(id);

// Üzenetek lekérdezése felhasználó ID alapján (egy irányba)
const getMessagesByUserId = (id) => {
    return Message.findAll({
        where: {
            senderID: id
        }
    });
};

const getMessagesByRecipientId = async (sId, rId) => {
    try {
        const messages = await Message.findAll({
            where: {
                [Op.or]: [
                    { senderID: sId, recipientID: rId },
                    { senderID: rId, recipientID: sId }
                ]
            },
            order: [['sentTime', 'ASC']]
        });
        return messages;
    } catch (error) {
        console.error("Error fetching messages:", error);
        throw error;
    }
};

const createMessage = async (data) => {
    try {
        const message = await Message.create(data);
        return message;
    } catch (error) {
        throw error;
    }
}

const updateMessage = async (id, data) => {
    const message = await Message.findByPk(id);
    if (!message) {
        return false;
    }
    await message.update(data);
    return true;
}

const deleteMessageById = async (id) => {
    const message = await Message.findByPk(id);
    if (!message) {
        return false;
    }
    await message.destroy();
    return true;
}

module.exports = {
    getAllMessages,
    getMessageById,
    getMessagesByUserId,
    getMessagesByRecipientId,
    createMessage,
    updateMessage,
    deleteMessageById,
};