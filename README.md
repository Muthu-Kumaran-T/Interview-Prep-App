
# Interview Prep AI 🤖✨

Interview Prep AI is a web application designed to help users prepare for job interviews using AI-powered tools. Users can generate role-specific questions, get detailed answers, and organize their study materials in a personalized dashboard.

**Live Demo:** [https://interviewprepapp.netlify.app/](https://interviewprepapp.netlify.app/)

-----

## Features

  * **AI-Powered Question Generation:** Get interview questions tailored to specific job roles.
  * **In-depth Answers:** Expand on questions to receive detailed answers and explanations.
  * **User Authentication:** Secure login and registration for a personalized experience.
  * **Personalized Dashboard:** Organize and manage your interview preparation materials.
  * **Profile Management:** Users can upload a profile picture and manage their account.
  * **Responsive Design:** Fully functional on both desktop and mobile devices.

-----

## Tech Stack

This project is a full-stack application built with the MERN stack and other modern technologies.

  * **Frontend:**
      * **React:** A JavaScript library for building user interfaces.
      * **Vite:** A fast build tool for modern web development.
      * **Tailwind CSS:** A utility-first CSS framework for rapid styling.
      * **React Router:** For client-side routing.
      * **Axios:** For making HTTP requests to the backend.
  * **Backend:**
      * **Node.js:** A JavaScript runtime environment.
      * **Express.js:** A web application framework for Node.js.
      * **MongoDB:** A NoSQL database for storing user data.
      * **Mongoose:** An object data modeling (ODM) library for MongoDB.
      * **JSON Web Tokens (JWT):** For secure user authentication.
      * **Multer:** Middleware for handling `multipart/form-data`, used for file uploads.
  * **Deployment:**
      * **Frontend:** Deployed on **Netlify**.
      * **Backend:** Deployed on **Render**.

-----

## Local Setup and Installation

To run this project on your local machine, follow these steps:

### Prerequisites

  * Node.js (v14 or later)
  * npm (or yarn)
  * MongoDB account (for the database connection string)

### 1\. Clone the Repositories

You will need to clone both the frontend and backend repositories.

```bash
# Clone the frontend
git clone <your-frontend-repo-url>
cd <frontend-folder-name>

# Clone the backend
git clone <your-backend-repo-url>
cd <backend-folder-name>
```

### 2\. Backend Setup

```bash
# 1. Navigate to the backend directory
cd <backend-folder-name>

# 2. Install dependencies
npm install

# 3. Create a .env file in the root of the backend folder
#    and add the following variables:
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret_key>
GEMINI_API_KEY=<your_gemini_api_key>
PORT=8000
BACKEND_URL=http://localhost:8000

# 4. Start the backend server
npm start
```

### 3\. Frontend Setup

```bash
# 1. Navigate to the frontend directory
cd <frontend-folder-name>

# 2. Install dependencies
npm install

# 3. Create a .env file in the root of the frontend folder
#    and add the following variable:
VITE_API_BASE_URL=http://localhost:8000

# 4. Start the frontend development server
npm run dev
```

Your application should now be running locally, with the frontend accessible at `http://localhost:5173` (or another port specified by Vite) and the backend at `http://localhost:8000`.
