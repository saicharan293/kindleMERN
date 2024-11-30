import React from 'react'
import { NavLink } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='h-[98vh] flex items-center justify-center'>
      <div className="p-4 w-1/4 rounded bg-gray-800">
        <h1 className='text-center font-semibold text-2xl'>Sign Up</h1>
        <input 
            type="text" 
            placeholder='Enter username' 
            className='bg-gray-700 outline-none p-3  rounded-full my-3 w-full' 
            name='username'
        />

        <input 
            type="email" 
            placeholder='xyz@example.com' 
            className='bg-gray-700 outline-none p-3  rounded-full my-3 w-full' 
            name='email'
        />

        <input 
            type="password" 
            placeholder='Enter password' 
            className='bg-gray-700 outline-none p-3  rounded-full my-3 w-full' 
            name='password'
        />
        <div className='flex flex-col w-full items-center justify-between'>
            <button className=" my-2 hover:text-white bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded">Signup</button>
            <NavLink to={"/login"} className="text-sm text-gray-400 hover:text-gray-200">Already having an account? Login</NavLink>
        </div>
        {/* <button className="w-full my-2 hover:text-white bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded">SignUp</button> */}
      </div>
    </div>
  )
}

export default SignUp
