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
      {/* Mobile menu */}
      {/* <div className='absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
        <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
          <div className='px-5 pt-4 flex items-center justify-between'>
            <div>
              <img
                className='h-8 w-auto'
                src='../../assests/byssi.svg'
                alt=''
              />
            </div>
            <div className='-mr-2'>
              <button
                type='button'
                className='bg-white rounded-md p-2 inline-flex items-center justify-center text-orange-400 hover:text-orange-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              >
                <span className='sr-only'>Close main menu</span>

                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            <a
              href='#'
              className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
            >
              Home
            </a>

            <a
              href='#'
              className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
            >
              Who We Are
            </a>

            <a
              href='#'
              className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
            >
              Partners
            </a>

            <a
              href='#'
              className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
            >
              Applications
            </a>
          </div>
          <a
            href='#'
            className='block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100'
          >
            Sign in
          </a>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
