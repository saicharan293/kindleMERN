import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='h-[98vh] flex items-center justify-center'>
      <div className="p-4 w-1/4 rounded bg-gray-800">
        <h1 className='text-center font-semibold text-2xl'>Login</h1>
        <input 
            type="text" 
            placeholder='Enter username' 
            className='bg-gray-700 outline-none p-3  rounded-full my-3 w-full' 
            name='username'
        />
        <input 
            type="password" 
            placeholder='Enter password' 
            className='bg-gray-700 outline-none p-3  rounded-full my-3 w-full' 
            name='password'
        />
        <div className='flex flex-col w-full items-center justify-between'>
            <button className=" my-2 hover:text-white bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded">Login</button>
            <NavLink to={"/signup"} className="text-sm text-gray-400 hover:text-gray-200">Not having an account? Signup</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Login
