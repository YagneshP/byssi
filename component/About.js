import Image from "next/image";
import React from "react";
import about_us from "../public/about_us.jpg";
import Button from "./UI/Button";
function About() {
  return (
    <section className='container mx-auto my-20'>
      <h2 className='text-2xl font-semibold text-orange-600 relative mb-4'>
        <span className='block absolute w-12 rounded-md h-1 bg-orange-400 top-4 '></span>
        <span className='ml-16'>About us</span>
      </h2>
      <div className='flex flex-col md:flex-row justify-evenly mt-16 gap-10'>
        <div className='md:max-w-md lg:max-w-lg mx-4 basis-1/2'>
          <h3 className='font-bold text-4xl mb-8'>The BYSSI Goal</h3>
          <p className='pt-4 mb-8 md:pt-0 text-xl leading-relaxed font-medium text-slate-500'>
            Increase graduation rates, class scores and develop opportunities
            for BYSSI students and parents / caregivers to achieve better
            outcomes.
          </p>
          <Button>More About Us</Button>
        </div>
        <div className='basis-3/4 md:h-96 rounded-xl overflow-hidden relative'>
          <Image src={about_us} layout='fill' />
        </div>
      </div>
    </section>
  );
}

export default About;
