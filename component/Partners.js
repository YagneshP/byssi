import React from "react";

const Partners = () => {
  return (
    <section className='h-screen'>
      <div className='container mx-auto pt-16'>
        <h2 className='text-2xl font-semibold text-orange-600 relative '>
          <span className='block absolute w-12 rounded-md h-1 bg-orange-400 top-4 '></span>
          <span className='ml-16'>Our Partners</span>
        </h2>
        <div className='flex md:justify-evenly flex-col md:flex-row mt-32 gap-4 text-slate-600'>
          <div className='bg-white p-10 rounded-lg relative md:basis-1/3'>
            <h4 className='font-bold text-2xl'>title</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
