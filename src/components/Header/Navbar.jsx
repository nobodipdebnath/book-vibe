import React from "react";
import { Link, NavLink } from "react-router";

export const Navbar = () => {
    const links = <>
        <NavLink to='/'><li className="links">Home</li></NavLink>
        <NavLink to='/readList'><li className="links">Listed Books</li></NavLink>
        <NavLink to='/about'><li className="links">Pages to Read</li></NavLink>
    </>
  return (
    <nav className="flex justify-between items-center py-10">
      <div>
        <Link to='/'>
          <h1 className="text-primary1 font-bold text-3xl">Book Vibe</h1>
        </Link>
      </div>
      <ul className="flex items-center  gap-4 text-primary2">
        {links}
      </ul>
      <div className="flex gap-6">
        <Link to='/login'>
          <button className="py-4 px-8 bg-[#23BE0A] text-white font-semibold rounded-xl cursor-pointer hover:bg-[#1f9c0c] duration-500">Sign in</button>
        </Link>
        <Link to='/signup'>
          <button className="py-4 px-8 bg-[#59C6D2] text-white font-semibold rounded-xl cursor-pointer hover:bg-[#2a929e] duration-500">Sign up</button>
        </Link>
      </div>
    </nav>
  );
};
