import Link from "next/link";
import React from "react";
import About from "../component/About";
import Hero from "../component/Hero";
import Services from "../component/Services";
import Partners from "../component/Partners";

const Home = () => {
  return (
    <main className='grow'>
      <Hero />
      <About />
      <Services />
      <Partners />
    </main>
  );
};

export default Home;
