import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AuthPage from './pages/authPage';
import Dashboard from './pages/dashboard';
import Layout from './components/layout';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  // Check if the user is logged in by checking localStorage or session data
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  
  // If user is not logged in, redirect to the login page
  return isLoggedIn ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route for Authentication */}
        <Route path="/login" element={<AuthPage />} />
        
        {/* Private Route for Dashboard - Only accessible if logged in */}
        <Route path="/" element={
          <PrivateRoute>
            <Layout>  
              <Dashboard />
            </Layout>
          </PrivateRoute>
        } />
        
        {/* You can add more protected routes here using the same pattern */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
