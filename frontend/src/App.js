// frontend/src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Products from './components/Products';
import Users from './components/Users';
import Orders from './components/Orders';

function App() {
  return (
    <Router>
      <div className="container">
        <header className="py-3 mb-4 border-bottom">
          <div className="d-flex flex-column align-items-center">
            <h1 className="text-primary">Welcome to the E-commerce App</h1>
            <nav className="nav nav-pills">
              <Link className="nav-link" to="/products">Products</Link>
              <Link className="nav-link" to="/users">Users</Link>
              <Link className="nav-link" to="/orders">Orders</Link>
            </nav>
          </div>
        </header>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
