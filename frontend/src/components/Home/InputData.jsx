import React, { useState } from 'react'
import {RxCross2} from 'react-icons/rx'

const InputData = ({toggleOpen, setToggleOpen}) => {
  return (
    <>
      <div className={`fixed ${toggleOpen?'block':'hidden'} top-0 left-0 bg-gray-800 opacity-50 h-screen w-full`}></div>
      <div className={`fixed ${toggleOpen?'block':'hidden'} top-0 left-0 flex items-center justify-center h-screen w-full`}>
        <div className="w-2/6 bg-gray-900 rounded-md p-4 ">
            <div className='flex justify-end'>
                <button className='text-2xl' onClick={()=>setToggleOpen(!toggleOpen)}>
                    <RxCross2 />
                </button>
            </div>
            <input type="text" placeholder='Title' name='title' className='px-3 py-2 my-3 rounded w-full bg-gray-600 outline-none'/>
            <textarea name='description' id="" rows={10} cols={10} placeholder='Description...' className='px-3 py-2 rounded w-full bg-gray-600 my-3 outline-none'></textarea>
            <button className='px-3 py-2 bg-blue-600 rounded font-semibold text-xl w-full'>Submit</button>
        </div>
      </div>
    </>
  )
}

export default InputData
