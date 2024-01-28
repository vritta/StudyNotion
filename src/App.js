import "./App.css";
import Navbar from "./components/Navbar";
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Dashboard from './pages/Dashboard.js';
import { Route, Routes } from 'react-router-dom';
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
  <div className="flex flex-col w-screen h-screen bg-richblack-900">
  <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
    <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
    <Route path="/dashboard" element={
      <PrivateRoute isLoggedIn={isLoggedIn}>
        <Dashboard/>
      </PrivateRoute>}/>
  </Routes>
  </div>
  );
}

export default App;
