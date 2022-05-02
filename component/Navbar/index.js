import React from "react";

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-evenly'>
      <a href='#' className='font-medium text-orange-500'>
        Home
      </a>
      <a className='font-medium text-black hover:text-orange-300'>Who We Are</a>
      <a className='font-medium text-black hover:text-orange-300'>
        Community Partner
      </a>
      <a className='font-medium text-black hover:text-orange-300'>
        Applications
      </a>
    </nav>
  );
};

export default Navbar;
