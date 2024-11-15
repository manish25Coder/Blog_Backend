const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/user/all', authenticateToken, userController.getAllUsers);
router.get('/user/:id', authenticateToken, userController.getUserById);
router.put('/user/:id/update', authenticateToken, userController.updateUser);
router.delete('/user/:id/delete', authenticateToken, userController.deleteUser);

module.exports = router;
