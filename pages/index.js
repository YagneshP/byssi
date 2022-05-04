import Image from "next/image";
import Link from "next/link";
import React from "react";
import backgroundImg from "../public/bgpattern.svg";
const Home = () => {
  return (
    <main className='grow'>
      <section className='pt-4 text-3xl font-bold grow'>
        <h1>Hello world!</h1>

        <Image
          src={backgroundImg}
          objectFit='cover'
          className='z-0'
          layout='fill'
          quality={100}
        />
      </section>
    </main>
  );
};

export default Home;
