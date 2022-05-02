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
      <div className='hidden sm:flex grow  justify-evenly'>
        <a
          href='#'
          className='font-medium active:text-orange-500 hover:text-orange-300'
        >
          Home
        </a>
        <a className='font-medium text-black active:text-orange-500 hover:text-orange-300'>
          Who We Are
        </a>
        <a className='font-medium text-black hover:text-orange-300'>
          Community Partner
        </a>
        <a className='font-medium text-black hover:text-orange-300'>
          Applications
        </a>
      </div>

      {/* hamburger icon */}
      {/* <div>

      </div> */}

      <a>
        <Button>SignIn</Button>
      </a>
    </nav>
  );
};

export default Navbar;
