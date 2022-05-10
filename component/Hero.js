import React from "react";
import Image from "next/image";
import backgroundImg from "../public/bgpattern.svg";
const Hero = () => {
  return (
    <section className='pt-4 text-3xl font-bold grow h-screen bg-[url("/bgpattern.svg")] bg-no-repeat bg-cover'>
      {/* <Image
        src={backgroundImg}
        objectFit='cover'
        className='z-0'
        layout='fill'
        quality={100}
      /> */}
      <div>
        <h2 className='text-green-600'>
          Black Youth School Success Initiative
        </h2>
      </div>
    </section>
  );
};

export default Hero;
