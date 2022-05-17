import Image from "next/image";
import React from "react";
import teacher from "../public/teacher.svg";
import mentor from "../public/mentor.svg";
import education from "../public/education.svg";

const Services = () => {
  return (
    <section className='container mx-auto mb-4'>
      <h2 className='text-2xl font-semibold text-orange-600 relative mb-4'>
        <span className='block absolute w-12 rounded-md h-1 bg-orange-400 top-4 '></span>
        <span className='ml-16'>Services</span>
      </h2>
      <div className='flex md:justify-evenly flex-col md:flex-row mx-4 gap-4 text-white'>
        <div className='md:w-1/3 h-72 flex  bg-zinc-800 flex-col justify-center pt-4'>
          <div className='flex justify-evenly items-center relative'>
            <div className='text-white before:h-24 before:w-24 before:bg-gray-50/40 before:rounded-full before:px-1 before:py-4 before:-top-10 before:left-1 block before:absolute'>
              <Image src={teacher} width={80} height={80} />
            </div>
            <h4 className='text-xl font-medium font-serif tracking-wide'>
              Online Tutoring
            </h4>
          </div>

          <p className='p-4'>
            One-to-One Tutoring and Weekly Homework Help as well as Drop-in
            Sessions with your online tutor.
          </p>
        </div>

        <div className='md:w-1/3 h-72 bg-red-500 flex flex-col justify-center pt-4'>
          <div className='flex justify-evenly items-center relative'>
            <div className='text-white before:h-24 before:w-24 before:bg-gray-50/40 before:rounded-full before:px-1 before:py-4 before:-top-10 before:left-1 block before:absolute'>
              <Image src={mentor} width={80} height={80} />
            </div>
            <h4 className='text-xl font-medium font-serif tracking-wide'>
              Online Mentoring
            </h4>
          </div>

          <p className='p-4'>
            Big Brother Big Sisters, Leadership and Career Skills Training,
            Parent Ambassador Program.
          </p>
        </div>
        <div className='md:w-1/3 h-72  bg-orange-500 flex flex-col justify-center pt-4'>
          <div className='flex justify-evenly items-center relative'>
            <div className='text-white before:h-24 before:w-24 before:bg-gray-50/40 before:rounded-full before:px-1 before:py-4 before:-top-10 before:left-1 block before:absolute'>
              <Image src={education} width={80} height={80} />
            </div>
            <h4 className='text-xl font-medium font-serif tracking-wide'>
              Online Programing
            </h4>
          </div>

          <p className='p-4'>
            Virtual programing, educational workshops and events helping
            students to develop academic, professional and practical life skills
            and knowledge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
