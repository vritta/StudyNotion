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
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="email"><p>Email Address<sup>*</sup></p></label>
        <input required type='email' placeholder='Enter email address' 
        name='email' id='email' value = {formData.email} 
        onChange={changeHandler}/>
        <br />

        <label htmlFor="password"><p>Password<sup>*</sup></p></label>
        <input required type={showPassword?"text":"password"} placeholder='Enter Password' 
        name='password' id='password' value = {formData.password}
        onChange={changeHandler} 
        />

        <span onClick={ ()=>setShowPassword((prev)=>!prev) }>
            {showPassword?<AiOutlineEyeInvisible/>:<AiOutlineEye/>}
        </span>
        <NavLink to="#"><p>Forgot Password</p></NavLink>
        <button type='submit'>Sign In</button>
      </form>
    </div>
  )
}

export default LoginForm
