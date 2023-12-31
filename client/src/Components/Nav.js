import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContext} from '../userContext'
function Nav() {
  const {userInfo}=useContext(userContext);
  const userEmail=userInfo.email;
  console.log(userInfo)
  return (
    
    <nav className='flex justify-between px-4 list-none h-[70px] items-center  bg-green-600   text-yellow-50'>
      <Link  to={'/'} className='  text-[24px]  font-semibold hover:text-red-300 delay-100'>Find Missing People</Link>
      <div className=' mx-4  '>
        { userEmail&&
      <Link to={'/register'} className=' inline-block border p-[5px] rounded bg-white text-green-500 mx-4 hover:text-white hover:bg-green-500 ease-in duration-300'>{userEmail}</Link>
        
}
{ !userEmail &&
<>
      <Link to={'/register'} className=' inline-block border p-[5px] rounded bg-white text-green-500 mx-4 hover:text-white hover:bg-green-500 ease-in duration-300'>Register</Link>
      <Link to={'/login'} className=' inline-block border p-[5px] rounded bg-white text-green-500  hover:text-white hover:bg-green-500 ease-in duration-300'>Login</Link>
      </>
}
      </div>
    </nav>
  )
}

export default Nav