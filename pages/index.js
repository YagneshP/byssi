import Link from "next/link";
import React from "react";
import About from "../component/About";
import Hero from "../component/Hero";
import Services from "../component/Services";

const Home = () => {
  return (
    <main className='grow'>
      <Hero />
      <About />
      <Services />
    </main>
  );
};

export default Home;
