import "./App.css";
import Navbar from "./components/Navbar";
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Dashboard from './pages/Dashboard.js';
import { Route, Routes } from 'react-router-dom';
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return <div>
  <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
  </Routes>
  </div>;
}

export default App;
