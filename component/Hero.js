import React from "react";
import Image from "next/image";
import backgroundImg from "../public/bgpattern.svg";
const Hero = () => {
  return (
    <section className='pt-4 text-3xl font-bold grow'>
      <Image
        src={backgroundImg}
        objectFit='cover'
        className='-z-2'
        layout='fill'
        quality={100}
      />
    </section>
  );
};

export default Hero;
