const Blog = require('../models/Blog'); // Import the Blog model

// Create a new blog
const createBlog = async (blogData) => {
  try {
    const blog = new Blog({
      title: blogData.title,
      content: blogData.content,
      thumbnail: blogData.thumbnail,
      createdBy: blogData.createdBy
    });
    await blog.save();
    return blog;
  } catch (error) {
    throw new Error('Error creating blog');
  }
};

// Update an existing blog by ID
const updateBlog = async (blogId, updateData) => {
  try {
    const blog = await Blog.findByIdAndUpdate(blogId, {
      title: updateData.title,
      content: updateData.content,
      thumbnail: updateData.thumbnail
    }, { new: true });
    
    if (!blog) throw new Error('Blog not found');
    return blog;
  } catch (error) {
    throw new Error('Error updating blog');
  }
};

// Delete a blog by ID
const deleteBlog = async (blogId) => {
  try {
    const blog = await Blog.findByIdAndDelete(blogId);
    if (!blog) throw new Error('Blog not found');
    return blog;
  } catch (error) {
    throw new Error('Error deleting blog');
  }
};

// Get a specific blog by ID
const getBlogById = async (blogId) => {
  try {
    const blog = await Blog.findById(blogId).populate('createdBy', 'name email'); // Populate 'createdBy' field with user details
    if (!blog) throw new Error('Blog not found');
    return blog;
  } catch (error) {
    throw new Error('Error fetching blog by ID');
  }
};

// Get all blogs
const getAllBlogs = async () => {
  try {
    return await Blog.find().populate('createdBy', 'name email'); // Populate 'createdBy' field with user details
  } catch (error) {
    throw new Error('Error fetching all blogs');
  }
};

// Get all blogs created by a specific user
const getUserBlogs = async (userId) => {
  try {
    return await Blog.find({ createdBy: userId });
  } catch (error) {
    throw new Error('Error fetching blogs for user');
  }
};

module.exports = {
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogById,
  getAllBlogs,
  getUserBlogs,
};
