# 🍳 React Recipes

> A modern recipe management application built with React & TypeScript

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Redux](https://img.shields.io/badge/Redux-Toolkit-purple?logo=redux)](https://redux-toolkit.js.org/)

## 🌟 Features

- 🔐 **User Authentication** - Secure login & registration
- 🍲 **Recipe Management** - Create, edit, and browse recipes
- 👤 **User Profiles** - Personal profile management
- 📚 **Cooking Courses** - Access educational content
- 🥗 **Ingredient Lists** - Smart ingredient management
- 📱 **Responsive Design** - Works on all devices

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Batya19/react-login.git

# Navigate to project
cd react-login

# Install dependencies
npm install
```

### Running the App
```bash
# Start backend server (Terminal 1)
npm run server
# Server runs on http://localhost:3001

# Start frontend app (Terminal 2)
npm run dev
# App runs on http://localhost:5173
```

## 🛠️ Tech Stack

**Frontend:**
- React 18 - UI library
- TypeScript - Type safety
- Redux Toolkit - State management
- React Router - Navigation

**Backend:**
- Express.js - Server framework
- JSON Server - Mock database
- Auth Middleware - Security

**Tools:**
- Vite - Build tool
- Material-UI - UI components

## 📁 Project Structure

### Frontend (src/)
```
src/
├── components/          # Reusable components
│   ├── layout/         # Layout components
│   ├── Login.tsx       # Authentication
│   ├── RecipeForm.tsx  # Recipe management
│   └── UserProfile.tsx # User management
├── pages/              # App pages
├── store/              # Redux store
├── routes/             # App routing
├── services/           # API services
├── types/              # TypeScript types
└── images/             # Static assets
```

### Backend
```
├── server.js            # Main Express server
├── middleware/          # Custom middleware
│   └── authMiddleware.js # Authentication middleware
├── db/                  # Database files
│   └── db.json         # JSON Server database
└── package.json        # Backend dependencies
```

## 🎯 Key Components

### 🔐 Authentication
- **Login** - User authentication
- **UserProfile** - Profile management
- **UpdateUserForm** - Profile updates

### 🍳 Recipe Management
- **RecipeForm** - Add/edit recipes
- **RecipeDetail** - Recipe display
- **IngredientList** - Ingredient management

### 🎨 Layout
- **AppLayout** - Main layout
- **AppHeader** - Navigation header
- **NavList** - Menu navigation

## 🔌 API Endpoints

The backend provides RESTful API endpoints for managing users and recipes:

### 🔐 Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout

### 🍲 Recipes
- `GET /api/recipes` - Get all recipes
- `GET /api/recipes/:id` - Get specific recipe
- `POST /api/recipes` - Create new recipe
- `PUT /api/recipes/:id` - Update recipe
- `DELETE /api/recipes/:id` - Delete recipe

### 👤 Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

## 🛡️ Backend Features

- **Express.js Server** - RESTful API with middleware support
- **JSON Server** - Mock database for development
- **Authentication Middleware** - Protects routes and validates tokens
- **CORS Support** - Handles cross-origin requests
- **Error Handling** - Centralized error management
- **Data Validation** - Request validation and sanitization

## 📜 Available Scripts

```bash
npm run dev      # Start development
npm run build    # Build for production  
npm run server   # Start backend server
npm test         # Run tests
```

## 🤝 Contributing

1. Fork the project
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Batya** - [GitHub](https://github.com/Batya19)

## 🙏 Acknowledgments

- React community for amazing tools
- Cooking app inspirations
- Open source contributors

---

<div align="center">
  <b>Made with ❤️ for cooking enthusiasts</b>
</div>