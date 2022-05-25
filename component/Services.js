import Image from "next/image";
import React from "react";
import teacher from "../public/teacher.svg";
import mentor from "../public/mentor.svg";
import education from "../public/education.svg";

const Services = () => {
  const services = [
    {
      title: "Online Tutoring",
      desc: "One-to-One Tutoring and Weekly Homework Help as well as Drop-in Sessions with your online tutor.",
      image: teacher,
    },
    {
      title: "Online Mentoring",
      desc: "Big Brother Big Sisters, Leadership and Career Skills Training, Parent Ambassador Program.",
      image: mentor,
    },
    {
      title: "Online Programing",
      desc: "Virtual programing, educational workshops and events helping students to develop academic, professional and practical life skills and knowledge.",
      image: education,
    },
  ];
  return (
    <section className='bg-slate-100 h-full sm:h-screen'>
      <div className='container mx-auto pt-16 pb-16'>
        <h2 className='text-2xl font-semibold text-orange-600 relative '>
          <span className='block absolute w-12 rounded-md h-1 bg-orange-400 top-4 '></span>
          <span className='ml-16'>Services</span>
        </h2>
        <div className='flex md:justify-evenly flex-col justify-between md:flex-row sm:mt-24 gap-4 text-slate-600'>
          {/* New design for services */}
          {services.map((service) => (
            <div
              key={service.title}
              className='bg-white p-10 rounded-lg mx-4 relative md:basis-1/3 mt-24 shadow-xl'
            >
              <div className='bg-indigo-500 shadow-lg shadow-indigo-500/40 h-20 w-20 text-center p-4 rounded-2xl absolute -top-16 left-10'>
                <Image src={service.image} />
              </div>
              <h4 className='font-bold text-2xl'>{service.title}</h4>
              <p className='mt-4 text-lg'>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
