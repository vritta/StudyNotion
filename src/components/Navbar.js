import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import toast from 'react-hot-toast';

const Navbar = (props) => {
  
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-around'>
      <NavLink to="/">
        <img src={logo} alt=''/>
      </NavLink>
      <nav>
        <ul className='flex gap-3'>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className='flex ml-3 gap-3'>
        {
          isLoggedIn===true?
          <>
            <NavLink to="/login">
              <button>Login</button>
            </NavLink>
            <NavLink to="/signup">
              <button>Sign Up</button>
            </NavLink>
          </>:
          <>
          <NavLink to="/">
            <button onClick={()=>{setIsLoggedIn(false); toast.success("Logged Out");}}>
              Log Out
            </button>
          </NavLink>
          <NavLink to="/dashboard">
            <button>Dashboard</button>
          </NavLink>
          </>
        }
      </div>
    </div>
  )
}

export default Navbar
