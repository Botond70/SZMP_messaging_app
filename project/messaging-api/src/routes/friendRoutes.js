const express = require('express');
router = express.Router();

const
{
    getFriendsByUserId,
    createFriendByUserId,
    updateFriendById,
    deleteFriendById,
} = require('../controllers/friendController');

/**
 * @swagger
 * /friends/{userId}:
 *   get:
 *     summary: Get all friends for a user
 *     tags: [Friends]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Friend found
 *       404:
 *         description: Friend not found
 */

router.get('/:userId', getFriendsByUserId);


/**
 * @swagger
 * /friends/{sender}/{recipient}:
 *   post:
 *     summary: Create a new friend by ID
 *     tags: [Friends]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sender:
 *                 type: integer
 *                 format: int32
 *               recipient:
 *                 type: integer
 *                 format: int32
 *               status:
 *                 type: string
 *                 enum:
 *                     - "függőben"
 *                     - "elfogadva"
 *                     - "elutasítva"
 *                 default: "függőben"
 *               requestedtime:
 *                  type: string
 *                  format: date
 *     responses:
 *       201:
 *         description: Friend created
 *       404:
 *         description: Friend not found
 */
router.post('/:sender/:recipient', createFriendByUserId);


/**
 * @swagger
 * /friends/{id}:
 *   put:
 *     summary: Update a friend by ID
 *     tags: [Friends]
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
 *               sender:
 *                 type: integer
 *                 format: int32
 *               recipient:
 *                 type: integer
 *                 format: int32
 *               status:
 *                 type: string
 *                 enum:
 *                     - "függőben"
 *                     - "elfogadva"
 *                     - "elutasítva"
 *                 default: "függőben"
 *               requestedtime:
 *                  type: string
 *                  format: date
 *     responses:
 *       200:
 *         description: Friend updated
 *       404:
 *         description: Friend not found
 */
router.put('/:id', updateFriendById);

/**
 * @swagger
 * /friends/{id}:
 *   delete:
 *     summary: Delete a friend by ID
 *     tags: [Friends]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Friend deleted
 *       404:
 *         description: Friend not found
 */
router.delete('/:id', deleteFriendById);


module.exports = router;