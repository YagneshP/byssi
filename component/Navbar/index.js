import React from "react";
import Button from "../UI/Button";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className='flex flex-row justify-between items-center p-4'>
      <a>
        <img className='h-8 w-max sm:h-10' src='../../assests/byssi.svg' />
      </a>
      {/* NavLinks shown at sm and bigger */}
      <div className='hidden sm:flex  justify-evenly items-center'>
        <a
          href='#'
          className='font-medium active:text-orange-500 hover:text-orange-300 pr-6'
        >
          Home
        </a>
        <a className='font-medium text-black active:text-orange-500 hover:text-orange-300 pr-6'>
          Who We Are
        </a>
        <a className='font-medium text-black hover:text-orange-300 pr-6'>
          Partners
        </a>
        <a className='font-medium text-black hover:text-orange-300 pr-6'>
          Applications
        </a>

        <a>
          <Button>SignIn</Button>
        </a>
      </div>

      {/* hamburger icon */}
      <div className='sm:hidden justify-end'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
