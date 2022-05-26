import React from "react";

const Goals = () => {
  return (
    <div className='container mx-auto'>
      <div className='bg-gray-100 flex flex-col p-10 gap-12 justify-around items-center rounded-xl'>
        <h1 className='text-3xl font-bold '>Our Goals</h1>
        <div className='flex flex-row flex-wrap sm:flex-nowrap  justify-evenly gap-6'>
          <div className='flex flex-col items-center justify-between gap-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-16 w-16'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z' />
            </svg>
            <h3 className='text-xl font-semibold'>Education</h3>
            <p className='text-lg '>
              Black Youth are engaged in school and have access to the resources
              to prepare them for life.
            </p>
          </div>
          <div className='flex flex-col items-center justify-between gap-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-16 w-16'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
              />
            </svg>
            <h3 className='text-xl font-semibold'>Safety</h3>
            <p className='text-lg'>
              Black Youth are safe and engaged in meaningful opportunities and
              are connected.
            </p>
          </div>
        </div>
        <div className='flex flex-row flex-wrap sm:flex-nowrap justify-evenly gap-10'>
          <div className='flex flex-col items-center justify-between gap-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-12 w-12'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              />
            </svg>
            <h3 className='text-xl font-semibold'>Health</h3>
            <p className='text-lg'>
              Black children and the youth are physically, mentally, and
              emotionally healthy and well.
            </p>
          </div>
          <div className='flex flex-col items-center justify-between gap-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-16 w-16'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
              />
            </svg>
            <h3 className='text-xl font-semibold'>Community</h3>
            <p className='text-lg'>
              The community agency capacity has increased in the region where
              BYSSI operates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
