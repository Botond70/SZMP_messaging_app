const express = require('express');

const router = express.Router();

const userRoutes = require('./userRoutes');
router.use('/users', userRoutes);

const friendRoutes = require('./friendRoutes');
router.use('/friends', friendRoutes);

const messagesRoutes = require('./messagesRoutes');
router.use('/messages', messagesRoutes);

module.exports = router;