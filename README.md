# MERN Authentication & Role-Based Access System

## 📌 Project Overview
This project is a full-stack MERN application implementing user authentication using JWT, role-based access control, and protected APIs. A minimal React frontend is included to test login and protected routes.

---

## 🛠 Tech Stack
- Backend: Node.js, Express.js
- Frontend: React.js
- Database: MongoDB Atlas
- Authentication: JWT
- Security: bcrypt, middleware-based route protection

---

## ✨ Features Implemented
- User registration and login
- Password hashing using bcrypt
- JWT-based authentication
- Protected API routes
- Role-based access control (Admin/User)
- Centralized error handling
- RESTful API structure
- React frontend for testing APIs

---

## 🔗 API Endpoints

### Auth Routes
- `POST /api/v1/auth/register` – Register user
- `POST /api/v1/auth/login` – Login user

### Protected Routes
- `GET /api/v1/tasks` – Protected route (JWT required)

---

## ▶️ How to Run the Project

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
npm start
