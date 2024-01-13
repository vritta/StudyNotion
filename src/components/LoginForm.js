import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { NavLink, useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({email:"", password:""});
    const [showPassword,setShowPassword] = useState(false);

    function changeHandler(event){
        setFormData((prev)=>({...prev, [event.target.name]:event.target.value}));
    }

    function submitHandler(event){
      event.preventDefault();
      setIsLoggedIn(true);
      toast.success("Logged In");
      navigate("/dashboard");
    }

  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
      <label htmlFor="email" className='w-full'>
        <p className='text-[0.875rem] leading-[1.375rem] mb-1 text-richblack-5'>
        Email Address<sup className='text-pink-200'>*</sup>
        </p>
      </label>
      <input required type='email' placeholder='Enter email address' 
      name='email' id='email' value = {formData.email} 
      onChange={changeHandler} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>

      <div className='relative'>
        <label htmlFor="password" className='w-full'>
          <p className='text-[0.875rem] leading-[1.375rem] mb-1 text-richblack-5'>
          Password<sup className='text-pink-200'>*</sup>
          </p>
        </label>
        <input required type={showPassword?"text":"password"} placeholder='Enter Password' 
        name='password' id='password' value = {formData.password}
        onChange={changeHandler} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>

        <span onClick={ ()=>setShowPassword((prev)=>!prev) }
        className='absolute top-[38px] right-3 cursor-pointer'>
            {showPassword?<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>:
            <AiOutlineEye fontSize={24} fill='#AFB2BF'/>}
        </span>
      </div>
      <NavLink to="#">
      <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
        Forgot Password
      </p>
      </NavLink>
      <button type='submit' className='bg-yellow-50 font-medium rounded-[8px] py-[8px] px-[12px] text-richblack-900 mt-6'>Sign In</button>
    </form>
  )
}

export default LoginForm
