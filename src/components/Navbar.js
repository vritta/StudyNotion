import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import toast from 'react-hot-toast';

const Navbar = (props) => {
  
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex items-center justify-between text-white w-11/12 max-w-[1160px] py-4  mx-auto'>
      <NavLink to="/">
        <img src={logo} alt=''/>
      </NavLink>
      <nav>
        <ul className='flex gap-6 text-richblack-100'>
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

      <div className='flex items-center gap-x-4 text-richblack-100'>
        {
          isLoggedIn===false?
          <>
            <NavLink to="/login">
              <button className='bg-richblack-800 py-[8px] px-[12px] 
              rounded-[8px] border border-richblack-700'>Login</button>
            </NavLink>
            <NavLink to="/signup">
              <button className='bg-richblack-800 py-[8px] px-[12px] 
              rounded-[8px] border border-richblack-700'>Sign Up</button>
            </NavLink>
          </>:
          <>
          <NavLink to="/">
            <button onClick={()=>{setIsLoggedIn(false); toast.success("Logged Out");}}
             className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border
              border-richblack-700'>
              Log Out
            </button>
          </NavLink>
          <NavLink to="/dashboard">
            <button className='bg-richblack-800 py-[8px] px-[12px] 
            rounded-[8px] border border-richblack-700'>Dashboard</button>
          </NavLink>
          </>
        }
      </div>
    </div>
  )
}

export default Navbar
