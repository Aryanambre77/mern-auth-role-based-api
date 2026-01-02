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
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

Backend runs on http://localhost:5000
Frontend runs on http://localhost:3000


## 🔐 Authentication Flow

User logs in with email & password

Server validates credentials

JWT token is generated and returned

Token is stored in browser localStorage

Token is sent in Authorization header for protected routes

## 📄 API Documentation

Postman collection is included in the repository.

## 🚀 Scalability Notes

The backend is stateless and uses JWT-based authentication, allowing horizontal scaling. The application can be containerized using Docker and deployed behind a load balancer. Redis can be added for caching and rate limiting in high-traffic scenarios.
