import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  // const [isregsiter,setIsRegsiter]=useState(null);
  const loginHandler=async (e)=>{
    e.preventDefault();

    // const resonse=await fetch('http://localhost:3001/login',{
    //   method:'POST',

    // })

  }
  return (
         <div className='w-[400px] mx-auto border rounded my-[50px] px-4 py-4  text-black'>
         <h2 className='text-center text-[24px]'>Login</h2>
      <form onSubmit={loginHandler} className='grid gap-3  '>
        <input type='email' 
        placeholder='Enter email'
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        required
         className=' px-2 border rounded border-[black]'/>
        <input type='password' 
        placeholder='Enter password' 
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
        required
        className='px-2  border rounded border-[black]'/>
        <button type='submit' className='text-center text-[20px] bg-blue-800 text-white border rounded-[7px] '>Register</button>
      </form>
      <p className='text-center text-[24px]'>-----or-----</p>
      <Link to={'/register'} className=' inline-block w-[100%] text-center text-[20px]  bg-blue-600 text-white border rounded-[7px]'>Register</Link>
    </div>
  )
}

export default Login