const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the User schema with fields: username, password, and role
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true }, // Unique username for each user
  password: { type: String, required: true }, // Hashed password
  role: { type: String, enum: ['Admin', 'User', 'Moderator'], default: 'User' } // Role with default as 'User'
});

// Pre-save middleware to hash the password before saving to the database
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // Skip hashing if password is unchanged
  const salt = await bcrypt.genSalt(10); // Generate salt for hashing
  this.password = await bcrypt.hash(this.password, salt); // Hash the password
  next();
});

module.exports = mongoose.model('User', UserSchema); // Export User model
