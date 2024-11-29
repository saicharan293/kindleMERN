import React from 'react'
import {CgNotes} from 'react-icons/cg'
import {MdLabelImportant} from 'react-icons/md'
import {FaCheckDouble} from 'react-icons/fa6'
import {TbNotebookOff} from 'react-icons/tb'
import { Link, NavLink } from 'react-router-dom'

const SideBar = () => {
    const data=[
        {
            title:"All Task",
            icon: <CgNotes />,
            link:'/'
        },
        {
            title: "Important Tasks",
            icon:<MdLabelImportant />,
            link:'/important'
        },
        {
            title: "Completed Tasks",
            icon: <FaCheckDouble />,
            link:'/completed'
        },
        {
            title: "Pending Tasks",
            icon:<TbNotebookOff />,
            link:'/pending'
        },
    ]
  return (
    
    <>
        <div>
            <h2 className='font-semibold text-xl'>The Code Master</h2>
            <h4 className='mb-1 text-gray-400'>charansai805@gmail.com</h4>
            <hr />
        </div>
        <div>
            {data.map((items,i)=>(
                <NavLink to={items.link} className='my-2 flex items-center hover:bg-gray-600  p-2 rounded transition-all duration-300 cursor-pointer'>
                   {items.icon} &nbsp; {items.title}
                </NavLink>
            ))}
        </div>
        <div>
            <button className='bg-gray-500 w-full p-2 rounded'>Log Out</button>
        </div>
    </>
  )
}

export default SideBar