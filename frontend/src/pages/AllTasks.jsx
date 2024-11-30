import React, { useState } from 'react'
import Cards from '../components/Home/Cards'
import {IoAddCircleSharp} from 'react-icons/io5'
import InputData from '../components/Home/InputData'


const AllTasks = () => {
  const [toggleOpen, setToggleOpen] = useState(false)

  return (
    <>
      <div>
        <div className="w-full flex justify-end p-2">
          <button onClick={()=>setToggleOpen(!toggleOpen)}>
            <IoAddCircleSharp className='text-3xl text-gray-400 hover:text-gray-100 transition-all duration-100'/>
          </button>
        </div>
        <Cards home={true} setToggleOpen={setToggleOpen}/>
      </div>
      <InputData toggleOpen={toggleOpen} setToggleOpen={setToggleOpen}/>
    </>
  )
}

export default AllTasks