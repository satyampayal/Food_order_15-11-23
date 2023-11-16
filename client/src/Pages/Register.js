import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [isregsiter,setIsRegsiter]=useState(null);
  const [message,setMessage]=useState('');
  const registerHandler=async (e)=>{
          e.preventDefault();
          const response=await fetch('http://localhost:3001/register',{
            method:'POST',
            body:JSON.stringify({email,password}),
            headers:{'content-Type':'application/json'},
          })
          console.log(response);
          if(response.ok){
            setEmail(()=>'');
            setPassword(()=>'');
            setIsRegsiter(true);
            setMessage(()=>'Register success')
          }
          else{
            setIsRegsiter(true);
            if(response.status===409){
              setMessage(()=>'Registeration Already exist');
            }
            else{
              setMessage(()=>'Registeration Failed ');
            }
          }
  }
  return (
    <div className='w-[400px] mx-auto border rounded my-[50px] px-4 py-4  text-black'>
      {isregsiter?    <h2 className='text-center text-green-400 text-[16px]'>{message}</h2>:''}
         <h2 className='text-center text-[24px]'>Register</h2>
      <form onSubmit={registerHandler} className='grid gap-3  '>
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
        <button type='submit'  className='text-center text-[20px] bg-blue-800 text-white border rounded-[7px] cursor-pointer '>Register</button>
      </form>
      <p className='text-center text-[24px]'>-----or-----</p>
      <Link to={'/login'} className=' inline-block w-[100%] text-center text-[20px]  bg-blue-600 text-white border rounded-[7px]'>Login</Link>
    </div>
  )
}

export default Register