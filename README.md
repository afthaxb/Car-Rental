# 🚗 Car Rental Application

A full-stack MERN (MongoDB, Express, React, Node.js) car rental application with authentication, booking system, and admin panel.

## ✨ Features

- 🔐 **User Authentication** - JWT-based login and registration
- 🚙 **Car Browsing** - View available cars with details
- 📅 **Booking System** - Reserve cars for specific dates
- 👤 **User Dashboard** - Manage bookings and profile
- 🛡️ **Admin Panel** - Manage cars and bookings
- 🎨 **Modern UI** - Built with React and Tailwind CSS

## 🛠️ Tech Stack

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcrypt for password hashing

### Frontend
- React 19
- Vite
- React Router v7
- Tailwind CSS v4
- Axios
- Context API for state management

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/shehzab/Car-Rental.git
cd Car-Rental
```

### 2. Install dependencies
```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 3. Environment Setup

#### Backend (.env)
Create `backend/.env` file:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/hitech-Rentals
NODE_ENV=development
JWT_SECRET=your_jwt_secret_here
```

#### Frontend (.env)
Create `frontend/.env` file:
```env
VITE_API_URL=http://localhost:5000/api
```

### 4. Run the application

#### Development (both servers)
```bash
# From root directory
npm run dev
```

#### Or run separately
```bash
# Backend only
npm run server

# Frontend only
npm run client
```

The application will be available at:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

## 📁 Project Structure

```
Car-Rental/
├── backend/
│   ├── config/          # Database configuration
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Auth & other middleware
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── utils/           # Utility functions
│   └── server.js        # Entry point
│
├── frontend/
│   ├── src/
│   │   ├── api/         # API service layer
│   │   ├── components/  # React components
│   │   ├── context/     # Context providers
│   │   ├── pages/       # Page components
│   │   └── App.jsx      # Main app component
│   └── package.json
│
└── package.json         # Root package with scripts
```

## 🔌 API Endpoints

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/cars` - Get all cars
- `GET /api/cars/:id` - Get car details
- `POST /api/bookings` - Create booking
- `GET /api/bookings` - Get user bookings
- `GET /api/admin/cars` - Admin: Manage cars
- `GET /api/admin/bookings` - Admin: Manage bookings

## 🌐 Deployment

### Frontend (Cloudflare Pages)
1. Build the frontend: `cd frontend && npm run build`
2. Deploy the `dist` folder to Cloudflare Pages
3. Set environment variable: `VITE_API_URL=<your-backend-url>`

### Backend
Deploy to platforms like:
- Render
- Railway
- Heroku
- DigitalOcean

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Shehzab**
- GitHub: [@shehzab](https://github.com/shehzab)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Made with ❤️ using MERN Stack
