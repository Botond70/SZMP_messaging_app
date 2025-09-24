const messagesService = require('../services/messagesService');

const getMessagesByUserId = async (req, res) => {
    const {id} = req.params;
    try{
        const user = await messagesService.getMessagesByUserId(id);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({error: "Failed to get messages by user id"});
    }
}

const updateMessage = async (req, res) => {
    const {id} = req.params;
    try {
        const message = await messagesService.updateMessage(id);
        if (!message) {
            res.status(404).json({error: 'Message not found'});
        }
        res.json(message);
    }
    catch (error) {
        res.status(500).json({error: "Failed to update message"});
    }
}

const createMessage = async (req, res) => {
    try {
        const message = await messagesService.createMessage(req.body);
        res.status(201).json({message});
    }
    catch (error) {
        console.error(error);
        res.status(500).json({error: "Failed to create message"});
    }
}

const deleteMessageById = async (req, res) => {
    const {id} = req.params;
    try{
        const deleted = await messagesService.deleteMessageById(id);
        if (!deleted) {
            res.status(404).json({error: 'Message not found'});
        }
        res.status(200).json({message: 'Message deleted'});
    }
    catch (error) {
        console.error(error);
        res.status(500).json({error: "Failed to delete message by id"});
    }
}

module.exports = {
    getMessagesByUserId,
    updateMessage,
    deleteMessageById,
    createMessage,
}