# RBAC-Authentication-System
A simple and secure authentication system with Role-Based Access Control (RBAC) built using Node.js, Express, and MongoDB. This project demonstrates fundamental security concepts like Authentication, Authorization, and RBAC to control access to resources based on user roles.
Features
User Registration: New users can register with a username, password, and role.
Secure Login: Users can log in to receive a JWT for accessing protected resources.
Role-Based Access Control (RBAC):
Admin users have full access to administrative resources.
Regular users have restricted access based on their assigned roles.
Middleware:
Authentication: Verifies user identity using JSON Web Tokens (JWT).
Authorization: Restricts access to routes based on user roles.
Secure Password Storage: Passwords are hashed using bcrypt before being stored.
Project Structure
rbac-auth-system/
├── src/
│   ├── controllers/       # Route controller functions
│   │   ├── authController.js
│   │   ├── userController.js
│   ├── middleware/        # Custom middleware for authentication and authorization
│   │   ├── authenticate.js
│   │   ├── authorize.js
│   ├── models/            # Database models
│   │   ├── User.js
│   ├── routes/            # Route definitions
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   ├── utils/             # Utility functions (e.g., DB connection)
│   │   ├── db.js
│   └── app.js             # Main app configuration
├── .env                   # Environment variables
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation
└── server.js              # Entry point for the server
Tech Stack
Backend: Node.js with Express
Database: MongoDB with Mongoose
Authentication: JSON Web Tokens (JWT)
Password Hashing: bcrypt.js
Environment Management: dotenv
API Endpoints
Authentication Endpoints
Register User

Endpoint: POST /api/auth/register
Request Body:
json
{
  "username": "exampleUser",
  "password": "securePassword",
  "role": "User"
}
Response:
json

{
  "message": "User registered successfully"
}
Login User

Endpoint: POST /api/auth/login
Request Body:
json
{
  "username": "exampleUser",
  "password": "securePassword"
}
Response:
json
{
  "token": "jwt_token_here"
}
Protected Endpoints (RBAC)
Admin Access

Endpoint: GET /api/users/admin
Headers:
Authorization: Bearer <jwt_token>
Role Required: Admin
Response:
plaintext

Welcome Admin
User Access

Endpoint: GET /api/users/user
Headers:
Authorization: Bearer <jwt_token>
Roles Allowed: Admin, User
Response:
plaintext

Welcome User
Setup and Installation
Follow the steps below to run the project locally:

1. Clone the Repository
bash
git clone https://github.com/your-username/rbac-auth-system.git
cd rbac-auth-system
2. Install Dependencies
bash

npm install
3. Configure Environment Variables
Create a .env file in the root directory and add the following variables:

plaintext

DATABASE_URL=mongodb://localhost:27017/rbac-auth
JWT_SECRET=your_jwt_secret_key
PORT=5000
4. Run the Application
Start the server:

bash

npm start
The server will start on http://localhost:5000.

Testing the API
You can test the API using Postman, Insomnia, or cURL. Here's a brief guide:

Register a User:

Send a POST request to /api/auth/register with username, password, and role.
Log in to Obtain JWT:

Send a POST request to /api/auth/login with valid credentials.
Copy the token from the response.
Access Protected Endpoints:

Include the token in the Authorization header (e.g., Bearer <jwt_token>).
Access /api/users/admin or /api/users/user based on the role.
Future Enhancements
Implement token refresh functionality.
Add logging and auditing for sensitive actions.
Use OAuth 2.0 for third-party authentication (e.g., Google, Facebook).
Extend RBAC for fine-grained permissions (e.g., CRUD operations on specific resources).


