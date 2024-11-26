const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Controller function for user registration
exports.register = async (req, res) => {
  try {
    const { username, password, role } = req.body; // Extract user details from request body
    const user = new User({ username, password, role }); // Create a new User instance
    await user.save(); // Save the user to the database
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message }); // Handle registration errors
  }
};

// Controller function for user login
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body; // Extract login details from request body
    const user = await User.findOne({ username }); // Find the user by username
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password); // Compare passwords
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    // Generate a JWT with user ID and role
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token }); // Send the token to the client
  } catch (error) {
    res.status(400).json({ message: error.message }); // Handle login errors
  }
};
