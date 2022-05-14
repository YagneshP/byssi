import React from "react";
import Image from "next/image";
import new_hero from "../public/new_hero.svg";
const Hero = () => {
  return (
    <section className='pt-4 text-3xl font-bold grow md:h-screen grid md:grid-cols-2 md:gap-x-8 text-center'>
      <div>
        <h2 className='text-green-600 md:text-6xl tracking-widest font-serif  font-bold '>
          Black Youth <span>School Success</span> Initiative
        </h2>
      </div>
      <div>
        <Image src={new_hero} alt='A kid is writing on paper' />
      </div>
    </section>
    // <section className='bg-[url("/new_hero.png")] bg-no-repeat md:bg-cover bg-contain grow h-screen '></section>
  );
};

export default Hero;
