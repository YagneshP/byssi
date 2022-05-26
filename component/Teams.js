import Image from "next/image";
import React from "react";
import chenai from "../public/chennai.png";
import emma from "../public/emma.png";
const Teams = () => {
  return (
    <section className='conatainer mx-auto'>
      <div className='flex flex-row items-center justify-around gap-10'>
        <div className='bg-green-200 relative text-center w-72 rounded-2xl '>
          <figure className='rounded-full border-4 border-yellow-300 ring ring-red-300 -ring-offset-6  relative -top-20 left-16 h-40 w-40'>
            <Image
              src={chenai}
              layout='fill'
              className='absolute rounded-full '
            />
          </figure>
          <h3>Chenai Kadungure</h3>
          <p>Senior Manager</p>
        </div>
        <div className='bg-green-200 relative'>
          <figure className='rounded-full border-4 border-yellow-300 ring ring-red-300 -ring-offset-6  relative h-60 w-60'>
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
