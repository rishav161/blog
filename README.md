Blog Application
A full-stack blog application built with React for the frontend, Node.js and Express for the backend, and MongoDB for the database. This app allows users to create, read, edit, and delete blog posts. It also supports JWT authentication for secure access to protected routes.

Table of Contents
Project Setup
Backend Setup
Frontend Setup
Running the Application Locally
Environment Variables
Technologies Used
License
Project Setup
Backend Setup
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/blog-app.git
cd blog-backend
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file in the blog-backend directory with the following environment variables:

plaintext
Copy
Edit
JWT_SECRET=your-secret-key
MONGODB_URI=your-mongodb-connection-string
Run the backend server:

bash
Copy
Edit
npm run dev
The backend should now be running at http://localhost:5000.

Frontend Setup
Go to the blog-frontend directory:

bash
Copy
Edit
cd blog-frontend
Install dependencies:

bash
Copy
Edit
npm install
Run the frontend:

bash
Copy
Edit
npm run dev
The frontend should now be running at http://localhost:3000.

Running the Application Locally
Prerequisites
Ensure you have Node.js (v12 or higher) and MongoDB installed locally. You can install them from:

Node.js
MongoDB
Steps to Run Locally
Set up the backend:

Follow the steps under Backend Setup.
Ensure that your MongoDB connection string is correctly set in the .env file.
Set up the frontend:

Follow the steps under Frontend Setup.
Ensure the API URL in your frontend is pointing to the correct backend endpoint (http://localhost:5000).
Test:

Open http://localhost:3000 in your browser to view the app.
Test creating, editing, and deleting posts, ensuring that JWT authentication is working properly.
Environment Variables
Make sure the following environment variables are set in the .env file for both the backend and frontend:

Backend (.env)
JWT_SECRET: A secret key used to sign JWT tokens.
MONGODB_URI: The connection string for MongoDB.
Frontend (.env)
REACT_APP_API_URL: The URL of the backend API (e.g., http://localhost:5000 or your deployed backend URL).
Technologies Used

Frontend:
React
React Router
Bootstrap for styling
Axios for API calls
Backend:

Node.js
Express.js
MongoDB with Mongoose
JWT (JSON Web Tokens) for authentication
bcryptjs for password hashing
License
This project is licensed under the MIT License - see the LICENSE file for details.

