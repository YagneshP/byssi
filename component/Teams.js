import Image from "next/image";
import React from "react";
import chenai from "../public/chennai.png";
import emma from "../public/emma.png";
const Teams = () => {
  return (
    <section className='conatainer mx-auto'>
      <div className='flex flex-row items-center justify-around gap-10'>
        <div className='bg-slate-300 relative text-center w-72 h-52 rounded-2xl flex flex-col justify-center'>
          <div className='rounded-full border-4 border-white  ring ring-yellow-300 ring-offset-2 absolute -top-20 left-16 h-40  w-40 '>
            <Image
              src={chenai}
              layout='fill'
              className='absolute rounded-full '
            />
          </div>
          <div className='mt-16'>
            <h3 className='text-2xl font-medium'>Chenai Kadungure</h3>
            <p className='text-lg'>Senior Manager</p>
          </div>
        </div>
        <div className='bg-green-200 relative'>
          <figure className='rounded-full border-4 border-yellow-300 ring ring-red-300 -ring-offset-10  relative h-60 w-60'>
            <Image
              src={chenai}
              layout='fill'
              className='absolute rounded-full'
            />
          </figure>
          <p>Senior Manager</p>
        </div>
        <div>
          <div>
            <Image src={emma} width={300} height={300} />
          </div>
          <p>Emma Mauze</p>
          <p>Administrative Coordinator</p>
        </div>
      </div>
    </section>
  );
};

export default Teams;
