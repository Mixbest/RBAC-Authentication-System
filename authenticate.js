const jwt = require('jsonwebtoken');

// Middleware to verify the authenticity of the user's JWT
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from Authorization header
  if (!token) return res.status(401).json({ message: 'Access denied, no token provided.' }); // No token provided

  try {
    // Verify the JWT and attach user data to request object
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    res.status(400).json({ message: 'Invalid token.' }); // Invalid token
  }
};

module.exports = authenticate;
