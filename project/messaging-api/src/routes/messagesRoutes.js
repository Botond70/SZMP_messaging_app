const express = require('express');
router = express.Router();

const
{
    getMessagesByUserId,
    updateMessage,
    deleteMessageById,
    createMessage,
} = require('../controllers/messagesController');

/**
 * @swagger
 * /messages/{userId}:
 *   get:
 *     summary: Get all messages for a user
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Messages found
 *       404:
 *         description: Messages not found
 */

router.get('/user/:userId', getMessagesByUserId);



/**
 * @swagger
 * /messages/{id}:
 *   put:
 *     summary: Update a message by ID
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               senderID:
 *                 type: integer
 *                 format: int32
 *               recipientID:
 *                 type: integer
 *                 format: int32
 *               content:
 *                 type: string
 *               sentTime:
 *                  type: string
 *                  format: date
 *     responses:
 *       200:
 *         description: Message updated
 *       404:
 *         description: Message not found
 */
router.put('/:id', updateMessage);


/**
 * @swagger
 * /messages/{id}:
 *   delete:
 *     summary: Delete a message by ID
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Message deleted
 *       404:
 *         description: Message not found
 */
router.delete('/:id', deleteMessageById);



/**
 * @swagger
 * /messages/{id}:
 *   post:
 *     summary: Create a new message by ID
 *     tags: [Message]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               senderID:
 *                 type: integer
 *                 format: int32
 *               recipientID:
 *                 type: integer
 *                 format: int32
 *               content:
 *                 type: string
 *               sentTime:
 *                  type: string
 *                  format: date
 *     responses:
 *       201:
 *         description: Message created
 *      
 */
router.post('/:id', createMessage);

module.exports = router;