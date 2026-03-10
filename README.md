# React + Vite Project

This project is built using **React + Vite** to create a fast, scalable, and maintainable frontend application.

It includes:

* React
* Vite
* React Router DOM
* Redux Toolkit (RTK)
* React Hook Form
* Axios for API calls
* Environment configuration

The project follows **clean architecture, reusable components, and consistent coding standards**.

---

# Project Setup

## 1. Install Dependencies

```bash
npm install
```

## 2. Run Development Server

```bash
npm run dev
```

Application will run on:

```
http://localhost:3033
```

---

# Environment Variables

Environment variables are stored in the `.env` file.

Example:

```
VITE_API_BASE_URL=https://api.example.com
VITE_APP_NAME=MyApp
```

Access variables in code using:

```javascript
import.meta.env.VITE_API_BASE_URL
```

---

# Coding Standards

To maintain clean and readable code, follow the conventions below.

## 1. Variable Naming

Use **camelCase** for variables.

Example:

```javascript
const userName = "John";
const totalAmount = 500;
const isLoggedIn = true;
```

---

## 2. Function Naming

Use **camelCase** for functions.

Example:

```javascript
function getUserDetails() {}

function calculateTotalAmount() {}
```

---

## 3. React Components

Use **PascalCase** for component names.

Example:

```javascript
function Header() {}
function LoginPage() {}
function FormInput() {}
```

File naming should also follow **PascalCase**.

Example:

```
Header.jsx
LoginPage.jsx
FormInput.jsx
```

---

## 4. Constants

Use **UPPER_SNAKE_CASE** for constants.

Example:

```javascript
const API_TIMEOUT = 5000;
const MAX_FILE_SIZE = 2;
```

---

## 5. API Endpoints

Keep API endpoints centralized.

Example:

```javascript
const API_ENDPOINTS = {
  // Authentication APIs
  POST_AUTHENTICATION_USER_LOGIN: {
    method: "POST",
    url: `${CONFIG.BASE_URL}/auth/login`,
  },
};
```

---

## 6. Redux Slices

Redux slices should be placed inside:

```
redux/slices
```

Example:

```
authSlice.js
userSlice.js
```

Slice names should follow **camelCase**.

---

## 7. Utility Functions

Reusable helper functions should be stored in:

```
src/utils
```

Example:

```
helpers.js
validation.js
axiosInstance.js
```

---

# Form Handling

Forms are managed using **React Hook Form**.

Reusable components:

```
FormInput
FormDropdown
```

These components help maintain **consistent validation and UI**.

---

# Layout System

Common layout components are stored in:

```
src/layout
```

Example:

```
Header
Footer
Menu
MainLayout
```

---

# Routing

Routing is handled using **React Router DOM**.

Routes are defined in:

```
src/route/AppRoutes.jsx
```

---

# API Handling

All API calls should use the centralized Axios instance located at:

```
src/utils/axiosInstance.js
```

This allows:

* Token handling
* Base URL configuration
* Interceptors

---

# Best Practices

Follow these guidelines while developing:

* Use **reusable components**
* Keep **API logic separate from UI**
* Avoid hardcoded values
* Write **clean and readable code**
* Maintain **consistent folder structure**

---

# Recommended VS Code Extensions

* ES7 React Snippets
* ESLint
* Prettier
* Auto Rename Tag

---

# Tech Stack

* React
* Vite
* Redux Toolkit
* React Router DOM
* React Hook Form
* Axios

---

# Development Notes

* Always create reusable components when possible.
* Keep components small and focused.
* Maintain separation between **UI, logic, and API calls**.

---

# Author

Frontend Developer
React + JavaScript
