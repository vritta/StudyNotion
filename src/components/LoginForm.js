import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
    const [formData, setFormData] = useState({email:"", password:""});
    const [showPassword,setShowPassword] = useState(false);
    function changeHandler(event){
        setFormData((prev)=>({...prev, [event.target.name]:event.target.value}));
    }

  return (
    <div>
      <form>
        <label htmlFor="email"><p>Email Address<sub>*</sub></p></label>
        <input required type='email' placeholder='Enter email address' 
        name='email' id='email' value = {formData.email} onChange={changeHandler} 
        className='outline rounded-md'/>
        <br /><br />


        <label htmlFor="password"><p>Password<sub>*</sub></p></label>
        <input type={showPassword?"text":"password"} placeholder='Enter Password' 
        name='password' id='password' value = {formData.password} onChange={changeHandler} 
        className='outline rounded-md'/>
        <span onClick={ ()=>setShowPassword((prev)=>!prev) }>
            {showPassword?<AiOutlineEye/>:<AiOutlineEyeInvisible/>}
        </span>
        <NavLink to="#"><p>Forgot Password</p></NavLink>
        <br />
        <button type='submit'>Sign In</button>
      </form>
    </div>
  )
}

export default LoginForm
