import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({firstName:"", lastName:"", email:"", 
    password:"", confirmPassword:""});

    const [showPassword,setShowPassword] = useState(false);

    function changeHandler(event){
        setFormData((prev)=>({...prev, [event.target.name]:event.target.value}))
    }
    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Passwords do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {...formData};
        console.log("printing account data -\n"+Object.values(accountData));
        navigate("/dashboard");
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
        <form onSubmit={submitHandler}>
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
