import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import PaintingDisplay from './pages/PaintingDisplay';

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<HomePage />} />
         {/* <Route path="/cart" element={<CartPage />} /> */}
         <Route path="/painting/:id" element={<PaintingDisplay />} />
         {/* <Route path="/login" element={<LoginPage />} />
         <Route path="/register" element={<RegisterPage />} />
         <Route path="/orderpage" element={<OrderPage />} />
         <Route path="/checkout" element={<CheckoutPage />} /> */}
      </Routes>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
