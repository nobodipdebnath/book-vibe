import React from 'react'
import errorImage from '../../../assets/error.png'
import {Navbar} from '../../Header/Navbar'
import { NavLink } from 'react-router'
export const ErrorPage = () => {
  return (
    <div className='container mx-auto'>
      <Navbar ></Navbar>
      <div className='flex justify-center items-center'>
        <img src={errorImage} alt="" />
      </div>
      <div className='flex justify-center items-center'>
        <NavLink to='/'>
          <button className='py-3 px-10 border rounded-xl hover:text-white duration-500 hover:bg-[#23BE0A] font-semibold cursor-pointer'>Go To Home</button>
        </NavLink>
      </div>
    </div>
  )
}
