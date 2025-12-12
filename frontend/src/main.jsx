import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';
import axios from 'axios';

// Set base URL for all API requests
axios.defaults.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
axios.defaults.withCredentials = true; // Important for cookies/sessions if used

import { AuthProvider } from './context/AuthContext';
import { CarProvider } from './context/CarContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CarProvider>
        <App />
      </CarProvider>
    </AuthProvider>
  </React.StrictMode>
);
