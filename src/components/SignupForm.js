import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

const SignupForm = () => {
    const [formData, setFormData] = useState({firstName:"", lastName:"", email:"", 
    password:"", confirmPassword:""});

    const [showPassword,setShowPassword] = useState(false)
    function changeHandler(event){
        setFormData((prev)=>({...prev, [event.target.name]:event.target.value}))
    }

  return (
    <div>
        <div>
        <button>
            Student
        </button>
        <button>
            Instructor
        </button>
        </div>
        <form action="">
            <div>
                <label>
                    <p>First Name<sup>*</sup></p>
                    <input required type="text" placeholder='Enter First Name' name='firstName' 
                    id='firstName' onChange={changeHandler} value={formData.firstName}/>
                </label>
                <label>
                    <p>Last Name<sup>*</sup></p>
                    <input required type="text" placeholder='Enter Last Name' name='lastName' 
                    id='lastName' onChange={changeHandler} value={formData.lastName}/>
                </label>
            </div>
            
            <label>
                <p>Email Address<sup>*</sup></p>
                <input required type="email" placeholder='Enter Email Address' name='email' 
                id='email' onChange={changeHandler} value={formData.email}/>
            </label>

            <div>
                <label>
                    <p>Create Password<sup>*</sup></p>
                    <input required type={showPassword?"text":"password"} placeholder='Enter Password' name='password' 
                    id='password' onChange={changeHandler} value={formData.password}/>
                    <span onClick={() => setShowPassword((prev)=>!prev)}>
                        {showPassword?<AiOutlineEyeInvisible/>:<AiOutlineEye/>}
                    </span>
                </label>


                <label>
                    <p>Confirm Password<sup>*</sup></p>
                    <input required type={showPassword?"text":"password"} placeholder='Confirm Password' name='confirmPassword' 
                    id='confirmPassword' onChange={changeHandler} value={formData.confirmPassword}/>
                    <span onClick={() => setShowPassword((prev)=>!prev)}>
                        {showPassword?<AiOutlineEyeInvisible/>:<AiOutlineEye/>}
                    </span>
                </label>
            </div>
            <button>Create Account</button>
        </form>
    </div>
  )
}

export default SignupForm
