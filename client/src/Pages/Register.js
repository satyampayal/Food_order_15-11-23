import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='w-[400px] mx-auto border rounded my-[50px] px-4 py-4  text-black'>
         <h2 className='text-center text-[24px]'>Register</h2>
      <form className='grid gap-3  '>
        <input type='email' placeholder='Enter email' className=' px-2 border rounded border-[black]'/>
        <input type='password' placeholder='Enter password' className='px-2  border rounded border-[black]'/>
        <submit type='submit' className='text-center text-[20px] bg-blue-800 text-white border rounded-[7px] '>Register</submit>
      </form>
      <p className='text-center text-[24px]'>-----or-----</p>
      <Link to={'/login'} className=' inline-block w-[100%] text-center text-[20px]  bg-blue-600 text-white border rounded-[7px]'>Login</Link>
    </div>
  )
}

export default Register