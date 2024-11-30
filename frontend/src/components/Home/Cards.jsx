import React, { useState } from 'react'
import {CiHeart} from 'react-icons/ci'
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import {IoAddCircleSharp} from 'react-icons/io5'

const Cards = ({home, setToggleOpen}) => {

    const data = [
        {
            title:"Hitesh Chowdary",
            description: "This could be one of the good channesl for the starters of React js",
            status:"Pending"
        },
        {
            title: "Java Script master",
            description: "I have a good understanding of javascript concepts that are funda for React",
            status:"Complete"
        },
        {
            title: "Preparation",
            description: "I did a good amount of practice to understand variables in javascript",
            status:"Pending"
        },
        {
            title: "Projects",
            description: "Projects are showcased in Portfolio website launched via netlify",
            status:"Pending"
        }
    ]

    const [impButton, setImpButton] = useState('Pending')

  return (
    <div className='grid grid-cols-3 gap-4 p-2'>
      {data && data.map((item, i)=>(
        <div className='flex flex-col justify-between bg-gray-800 rounded-sm p-4'>
            <div >
                <h3 className='text-xl font-semibold'>{item.title}</h3>
                <p className='text-gray-300 my-2'>{item.description}</p>
            </div>
            <div className='mt-4 w-full flex items-center'>
                <button className={`${item.status == "Pending" ? "bg-red-400" : "bg-green-700" } p-2 rounded w-1/2`}>
                    {item.status}
                </button>
                <div className='text-white p-2 w-1/2 text-2xl flex font-semibold justify-around'>
                    <button>
                        <CiHeart />
                    </button>
                    <button>
                        <FaEdit />
                    </button>
                    <button>
                        <MdDelete />
                    </button>
                </div>
            </div>
        </div>
      ))}
      {home &&
        <button onClick={()=>setToggleOpen(true)} className="flex flex-col justify-center items-center bg-gray-800 rounded-sm p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-200">
            <IoAddCircleSharp className='text-3xl'/> <h2 className='text-2xl mt-4'>Add Task</h2>
        </button>
    }
    </div>
  )
}

export default Cards
