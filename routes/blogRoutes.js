const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const authenticateToken = require('../middleware/authMiddleware');

router.post('/blog/create', authenticateToken, blogController.createBlog);
router.get('/blog/all', blogController.getAllBlogs);
router.get('/blog/:id', blogController.getBlogById);
router.put('/blog/:id/update', authenticateToken, blogController.updateBlog);
router.delete('/blog/:id/delete', authenticateToken, blogController.deleteBlog);
router.get('/blog/user/:userId', blogController.getUserBlogs);

module.exports = router;
