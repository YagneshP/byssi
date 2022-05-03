import React from "react";

const Footer = () => {
  return (
    <footer className='flex flex-col text-white'>
      <section className='main-footer flex flex-col sm:flex-row p-4 justify-evenly bg-neutral-700 text-white'>
        <section className='contact flex flex-col py-4'>
          <h3 className='text-lg underline underline-offset-4 py-2 tracking-wide decoration-auto font-semibold decoration-rose-500'>
            Contact Us
          </h3>
          <p className='font-light text-slate-200 text-sm py-1'>
            Address Line 1
          </p>
          <p className='font-light text-slate-200 text-sm py-1'>
            Address Line 2
          </p>
          <p className='font-light text-slate-200 text-sm py-1'>123-123-1234</p>
        </section>
        <section className='usefulLinks flex flex-col py-4'>
          <h3 className='text-lg py-2 underline underline-offset-4 tracking-wide decoration-auto font-semibold decoration-rose-500'>
            Useful Links
          </h3>
          <a herf='#' className='font-light text-slate-200 text-sm py-1'>
            Blogs
          </a>
          <a href='#' className='font-light text-slate-200 text-sm py-1'>
            Volunteers
          </a>
          <a href='#' className='font-light text-slate-200 text-sm py-1'>
            Donate
          </a>
        </section>
        <section className='events flex flex-col py-4'>
          <h3 className='text-lg py-2 underline underline-offset-4 tracking-wide decoration-auto font-semibold decoration-rose-500'>
            Upcoming Events
          </h3>
          <a herf='#' className='font-light text-slate-200 text-sm py-1'>
            Event 1
          </a>
          <a href='#' className='font-light text-slate-200 text-sm py-1'>
            Event 2
          </a>
          <a href='#' className='font-light text-slate-200 text-sm py-1'>
            Event 3
          </a>
        </section>
      </section>

      <section className='sub-footer flex flex-col items-center sm:flex-row sm:justify-around bg-black py-2'>
        <p className='pb-2'> &copy; copyright 2022 by Byssi</p>
        <div className='socialLinks flex flex-row justify-evenly pt-2 items-center'>
          <a
            href='https://www.facebook.com/PeelBYSSI/'
            target='_blank'
            className='px-2'
          >
            <svg
              class='h-8 w-8 text-blue-500'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              {" "}
              <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
            </svg>
          </a>
          <a
            href='https://www.instagram.com/peel_byssi/'
            target='_blank'
            className='px-2'
          >
            <svg
              class='h-8 w-8 text-red-500 '
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              {" "}
              <rect x='2' y='2' width='20' height='20' rx='5' ry='5' />{" "}
              <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />{" "}
              <line x1='17.5' y1='6.5' x2='17.51' y2='6.5' />
            </svg>
          </a>
          <a
            href='https://twitter.com/Peel_BYSSI'
            target='_blank'
            className='px-2'
          >
            <svg
              class='h-8 w-8 text-blue-300'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              {" "}
              <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' />
            </svg>
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
