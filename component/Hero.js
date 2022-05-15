import React from "react";
import Image from "next/image";
import new_hero from "../public/new_hero.svg";
const Hero = () => {
  return (
    <section className='container mx-auto pt-4 text-3xl font-bold grow h-screen grid sm:grid-rows-2 md:grid-cols-2 md:gap-x-8 text-center place-content-center'>
      <div className='order-2'>
        <h2 className='text-stone-500 md:text-6xl tracking-widest font-serif  font-bold '>
          Black Youth <span>School Success</span> Initiative
        </h2>
      </div>
      <div className='order-1'>
        <Image src={new_hero} alt='A kid is writing on paper' />
      </div>
    </section>
  );
};

export default Hero;
