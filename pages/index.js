import Image from "next/image";
import React from "react";
import backgroundImg from "../public/bgpattern.svg";
const HomePage = () => {
  return (
    <section className='pt-4 text-3xl font-bold flex-grow'>
      <h1>Hello world!</h1>
      <Image
        src={backgroundImg}
        objectFit='cover'
        style={{ zIndex: -1 }}
        layout='fill'
        quality={100}
      />
    </section>
  );
};

export default HomePage;
