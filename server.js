const app = require('./src/app');

const PORT = process.env.PORT || 5000; // Get the port from environment variables or default to 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Start the server
