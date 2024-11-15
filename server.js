const express = require('express');
const connectToDatabase = require('./db.js');

// Initialize environment variables
require('dotenv').config();

//path
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');
const authenticateToken = require('./middleware/authMiddleware');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json()); 

// Route setup
app.use('/auth', authRoutes);  // Public routes for login and register
app.use('/user', authenticateToken, userRoutes);  // Protected routes for user operations
app.use('/blog', authenticateToken, blogRoutes);  // Protected routes for blog operations

// Root Route
app.get('/',(req,res)=>{
    res.send('hello')
})

// const PORT = process.env.PORT;
app.listen(process.env.PORT,async()=>{
    await connectToDatabase()
    console.log('server is running on port',process.env.PORT);
    
})
