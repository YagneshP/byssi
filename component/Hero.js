import React from "react";
import Image from "next/image";
import new_hero from "../public/Group.svg";
import Button from "./UI/Button";

const Hero = () => {
  return (
    <section className='font-bold grow h-screen bg-gradient-to-r from-purple-300/60 to-violet-100'>
      <div className='container mx-auto h-screen flex flex-col items-center justify-evenly sm:flex-row'>
        <div className='order-2 md:order-1 mx-4 flex flex-col justify-evenly md:block md:basis-1/2'>
          <h2 className='text-black text-4xl tracking-wide sm:tracking-widest font-serif text-center md:text-left font-bold my-2'>
            Black Youth <span className='text-violet-600'>School Success</span>{" "}
            Initiative
          </h2>
          <p className='text-sm font-light py-2'>
            Support up to approximately 500 Black children and youth in grades
            6-8 and for all four years of high school over a five-year period to
            achieve graduation rates on par with the regional average.
          </p>
          <Button className='my-4'>Enroll student</Button>
        </div>
        <div className='order-1 md:order-2 mx-4 md:basis-1/2'>
          <Image src={new_hero} alt='A kid is writing on paper' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
