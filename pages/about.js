import Image from "next/image";
import React from "react";
import Goals from "../component/Goals";
import Teams from "../component/Teams";
import about_us from "../public/about_us.jpg";
const About = () => {
  return (
    <main className='grow mt-16 sm:mt-24'>
      <section className='h-full flex flex-col'>
        <div className='h-96 bg-cover bg-center bg-[url("../public/about_us.jpg")]'></div>
        <div className='h-80'>
          <h2 className=' text-3xl text-center font-extrabold text-slate-600 mt-10 mb-6'>
            {" "}
            Who we are ?
          </h2>
          <p className=' tex-sm md:text-lg text-center mx-6 mb-12'>
            The Black Youth School Success Initiative (BYSSI) was created to
            foster and support the educational achievement of Black youth. As an
            ethno-specific collaborative, BYSSI partners with a community of
            Black-led/focused organizations to empower youth and fill identified
            service gaps in the Black community of Peel Region. Building the
            capacities of collaborating organizations by increasing their
            assets, attributes and abilities to respond to the complex needs of
            Black youth and families is at the core of BYSSI.
          </p>
        </div>
        <Goals />
        <Teams />
      </section>
    </main>
  );
};

export default About;
