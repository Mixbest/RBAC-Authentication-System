// Middleware to check if the user's role has permission to access the endpoint
const authorize = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access forbidden: insufficient permissions' }); // Forbidden access
    }
    next(); // User has required permissions, proceed to next middleware or handler
  };
};

module.exports = authorize;
