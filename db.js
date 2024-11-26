const mongoose = require('mongoose');

// Function to connect to MongoDB database
const connectDB = async () => {
  try {
    // Establish connection using Mongoose
    await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1); // Exit the process if database connection fails
  }
};

module.exports = connectDB;
