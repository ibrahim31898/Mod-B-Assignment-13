import { useState } from "react";
import React from "react";
import './App.css'
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";
import Navbar from "./Navbar";
import ProductDetail from "./ProductDetail";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="Signup" element={<Signup />} />
          <Route 
            path="Dashboard" 
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} 
          />
          <Route 
            path="product/:id" 
            element={isAuthenticated ? <ProductDetail /> : <Navigate to="/" />} 
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
