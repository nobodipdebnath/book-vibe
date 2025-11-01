import React from 'react'
import bookImage from '../../assets/banner.png'
import { NavLink } from 'react-router'
export const Banner = () => {
  return (
    <div className='flex gap-21 items-center p-[120px] my-12 rounded-2xl bg-gray-100'>
        <div>
            <h1 className='text-6xl font-bold text-primary1 leading-[80px] mb-12'>Books to freshen up your bookshelf</h1>
            <NavLink to='/readList'><button className='py-4 px-8 bg-[#23BE0A] text-white font-semibold rounded-xl cursor-pointer hover:bg-[#1f9c0c] duration-500'>View The List</button></NavLink>
        </div>
        <div>
            <img className='' src={bookImage} alt="" />
        </div>
    </div>
  )
}
