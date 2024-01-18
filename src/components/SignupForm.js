import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({firstName:"", lastName:"", email:"", 
    password:"", confirmPassword:""});

    const [showPassword,setShowPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");

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
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button className='hover:bg-white rounded-full max-w-max'
            onClick={()=>setAccountType("student")}>
                Student
            </button>
            <button
            onClick={()=>setAccountType("instructor")}>
                Instructor
            </button>
        </div>
        <form onSubmit={submitHandler}>
            <div className='flex justify-between mt-[20px]'>
                <label>
                    <p className='text-[0.875rem] leading-[1.375rem] mb-1 text-richblack-5'>First Name<sup className='text-pink-200'>*</sup></p>
                    <input required type="text" placeholder='Enter First Name' name='firstName' 
                    id='firstName' onChange={changeHandler} value={formData.firstName} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                </label>
                <label>
                    <p className='text-[0.875rem] leading-[1.375rem] mb-1 text-richblack-5'>Last Name<sup className='text-pink-200'>*</sup></p>
                    <input required type="text" placeholder='Enter Last Name' name='lastName' 
                    id='lastName' onChange={changeHandler} value={formData.lastName} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                </label>
            </div>
            
            <div className='mt-[20px]'>
                <label>
                    <p className='text-[0.875rem] leading-[1.375rem] mb-1 text-richblack-5'>Email Address<sup className='text-pink-200'>*</sup></p>
                    <input required type="email" placeholder='Enter Email Address' name='email' 
                    id='email' onChange={changeHandler} value={formData.email} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                </label>
            </div>
            

            <div className='flex justify-between mt-[20px]'>
                <label className='relative'>
                    <p className='text-[0.875rem] leading-[1.375rem] mb-1 text-richblack-5'>Create Password<sup className='text-pink-200'>*</sup></p>
                    <input required type={showPassword?"text":"password"} placeholder='Enter Password' name='password' 
                    id='password' onChange={changeHandler} value={formData.password} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                    <span onClick={() => setShowPassword((prev)=>!prev)}
                    className='absolute top-[38px] right-3 cursor-pointer'>
                        {showPassword?<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>:<AiOutlineEye fontSize={24} fill='#AFB2BF'/>}
                    </span>
                </label>

                <label className='relative'>
                    <p className='text-[0.875rem] leading-[1.375rem] mb-1 text-richblack-5'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                    <input required type={showPassword?"text":"password"} placeholder='Confirm Password' name='confirmPassword' 
                    id='confirmPassword' onChange={changeHandler} value={formData.confirmPassword} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                    <span onClick={() => setShowPassword((prev)=>!prev)}
                    className='absolute top-[38px] right-3 cursor-pointer'>
                        {showPassword?<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>:<AiOutlineEye fontSize={24} fill='#AFB2BF'/>}
                    </span>
                </label>
            </div>
            <button className='w-full bg-yellow-50 font-medium rounded-[8px] py-[8px] px-[12px] text-richblack-900 mt-6'>Create Account</button>
        </form>
    </div>
  )
}

export default SignupForm
