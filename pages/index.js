import Link from "next/link";
import React from "react";
import About from "../component/About";
import Hero from "../component/Hero";

const Home = () => {
  return (
    <main className='grow'>
      <Hero />
      <About />
    </main>
  );
};

export default Home;
