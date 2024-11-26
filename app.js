const express = require('express');
const connectDB = require('./utils/db'); // Database connection
const authRoutes = require('./routes/authRoutes'); // Authentication routes
const userRoutes = require('./routes/userRoutes'); // User role-based routes

require('dotenv').config(); // Load environment variables
connectDB(); // Initialize database connection

const app = express();
app.use(express.json()); // Parse JSON request bodies

// Mount authentication and user routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

module.exports = app; // Export the app for server.js
