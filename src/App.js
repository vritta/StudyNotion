import "./App.css";
import Navbar from "./components/Navbar";
import Home from './pages/Home.js'
import { NavLink, Route, Routes } from 'react-router-dom'

function App() {
  return <div>
  <Navbar/>

  <NavLink to="/support">Home</NavLink>

  <Routes>
    <Route path="/support" element={<Home/>}/>
  </Routes>
  </div>;
}

export default App;
