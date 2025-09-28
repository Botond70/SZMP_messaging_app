const express = require('express');
const router = express.Router();

const
{
    getMessagesByUserId,
    updateMessage,
    deleteMessageById,
    createMessage,
    getMessagesByRecipientId,
} = require('../controllers/messagesController');

/**
 * @swagger
 * /messages/history/{userId1}/{userId2}:
 * get:
 * summary: Get all messages between two users
 * tags: [Messages]
 * parameters:
 * - in: path
 * name: userId1
 * required: true
 * schema:
 * type: integer
 * - in: path
 * name: userId2
 * required: true
 * schema:
 * type: integer
 * responses:
 * 200:
 * description: Messages found
 * 404:
 * description: Messages not found
 */
// MÓDOSÍTOTT GET ÚTVONAL
router.get('/history/:userId1/:userId2', getMessagesByUserId);

/**
 * @swagger
 * /messages:
 * post:
 * summary: Create a new message
 * tags: [Messages]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * senderID:
 * type: integer
 * format: int32
 * recipientID:
 * type: integer
 * format: int32
 * content:
 * type: string
 * sentTime:
 * type: string
 * format: date
 * responses:
 * 201:
 * description: Message created
 */
// MÓDOSÍTOTT POST ÚTVONAL
router.post('/', createMessage);


// A többi útvonal a PUT és DELETE kérésekhez
router.put('/:id', updateMessage);
router.delete('/:id', deleteMessageById);

router.get('/recipient/:senderID/:recipientID', getMessagesByRecipientId);


module.exports = router;