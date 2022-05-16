import Image from "next/image";
import React from "react";
import about_us from "../public/about_us.jpg";
function About() {
  return (
    <section className='container mx-auto mb-4'>
      <h2 className='text-2xl font-semibold text-orange-600 relative mb-4'>
        <span className='block absolute w-12 rounded-md h-1 bg-orange-400 top-4 '></span>
        <span className='ml-16'>About us</span>
      </h2>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <Image src={about_us} width={600} height={300} />

        <div className='md:max-w-md lg:max-w-lg mx-4'>
          <p className='pt-4 md:pt-0'>
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
      </div>
    </section>
  );
}

export default About;
