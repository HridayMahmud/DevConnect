
# DevConnect Backend

The **backend of DevConnect** handles authentication, posts, user data, and real-time chat.
Built with **Node.js**, **Express**, **MongoDB**, and **Socket.IO** for real-time messaging.

---

## 🚀 Features

* **User Authentication:** Signup, Login, Logout with JWT
* **Feed Management:** Create, Read, Update, Delete posts
* **Real-time Chat:** Socket.IO powered messaging
* **Role-based Access Control:** Admin, User, and Guest roles
* **Error Handling:** Proper API responses for smooth client integration
* **Secure Passwords:** Hashing with bcrypt

---

## 📂 Project Structure

```
backend/
├── controllers/          # Handle requests and responses
│   ├── authController.js
│   ├── parcelController.js
│   └── chatController.js
├── models/               # Mongoose models
│   ├── User.js
│   ├── Post.js
│   └── Message.js
├── routes/               # API endpoints
│   ├── authRoutes.js
│   ├── feedRoutes.js
│   └── chatRoutes.js
├── middleware/           # Authentication & validation
│   ├── authMiddleware.js
│   └── roleMiddleware.js
├── config/               # DB connection & environment setup
│   └── db.js
├── server.js             # Entry point of the backend
├── package.json
├── .env                  # Environment variables
└── README.md
```

---

## 🛠️ Tech Stack

* **Server:** Node.js, Express.js
* **Database:** MongoDB + Mongoose
* **Authentication:** JWT, bcrypt
* **Real-time Communication:** Socket.IO
* **Environment:** dotenv for managing secrets

---

## ⚡ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/devconnect.git
cd devconnect/backend
```
2. Install dependencies:

```bash
npm install
```
3. Create a `.env` file in the root folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
4. Start the server (development mode):

```bash
npm run dev
```
> Make sure you have **nodemon** installed globally (`npm install -g nodemon`)
> Server will run at `http://localhost:5000`

---

## 📡 API Endpoints

### Auth

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| POST   | `/auth/register` | Register a new user     |
| POST   | `/auth/login`    | Login and get JWT token |
| POST   | `/auth/logout`   | Logout user             |

### Feed

| Method | Endpoint    | Description                       |
| ------ | ----------- | --------------------------------- |
| GET    | `/feed`     | Get all posts                     |
| GET    | `/feed/:id` | Get a single post                 |
| POST   | `/feed`     | Create a new post (auth required) |
| PUT    | `/feed/:id` | Update a post (auth required)     |
| DELETE | `/feed/:id` | Delete a post (auth required)     |

### Chat

| Method | Endpoint      | Description                 |
| ------ | ------------- | --------------------------- |
| GET    | `/chat/:room` | Get messages in a chat room |
| POST   | `/chat`       | Send a new message          |

> Real-time chat uses **Socket.IO**. Connect to `http://localhost:5000` on the frontend to send/receive messages live.

---

## 📝 Notes

* Use **JWT token** in request headers for protected routes:

```
Authorization: Bearer <token>
```
* Passwords are **hashed using bcrypt** before saving to DB.
* MongoDB database is required. You can use **MongoDB Atlas** or local MongoDB.
* Add more environment variables as needed (`MAIL_USER`, `MAIL_PASS`, etc.) for email features.
---
## 🧑‍💻 Author

**Your Name** – Full-stack Developer
 Shohag Rana(https://github.com/HridayMahmud)

---
## 📄 License
MIT License

