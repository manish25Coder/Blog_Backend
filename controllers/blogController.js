const blogService = require('../Services/blogService.js');

// Create a new blog
exports.createBlog = async (req, res) => {
  try {
    // Ensure the `createdBy` field is set from the request (e.g., from req.user.id if using authentication)
    const blogData = {
      title: req.body.title,
      content: req.body.content,
      thumbnail: req.body.thumbnail,
      createdBy: req.body.createdBy // Should ideally be req.user.id if auth is implemented
    };
    
    const blog = await blogService.createBlog(blogData);
    console.log(blog);
    
    res.status(201).json({ message: 'Blog created successfully', blog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a blog by its ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await blogService.getBlogById(req.params.id);
    console.log(blog);
    
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a blog by its ID
exports.updateBlog = async (req, res) => {
  try {
    // Allow updating only specific fields
    const updateData = {
      title: req.body.title,
      content: req.body.content,
      thumbnail: req.body.thumbnail
    };
    
    const updatedBlog = await blogService.updateBlog(req.params.id, updateData);
    console.log(updatedBlog);
    
    if (!updatedBlog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json({ message: 'Blog updated successfully', updatedBlog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a blog by its ID
exports.deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await blogService.deleteBlog(req.params.id);
    console.log(deletedBlog);
    
    if (!deletedBlog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogService.getAllBlogs();
    console.log(blogs);
    
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all blogs created by a specific user
exports.getUserBlogs = async (req, res) => {
  try {
    const blogs = await blogService.getUserBlogs(req.params.userId);
    console.log(blogs);
    
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
