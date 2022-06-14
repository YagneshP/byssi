import Image from "next/image";
import React from "react";

import Modal from "./UI/Modal";
import Link from "next/link";

const Teams = ({ teamMembers }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <section className='conatainer mx-auto h-full mb-10'>
        <h2 className='text-4xl text-center font-extrabold mt-16 '>
          Meet our Team
        </h2>
        <div className='flex flex-row flex-wrap items-center justify-around mt-8 container mx-auto gap-4 '>
          {teamMembers.map((member, i) => (
            <div
              key={member.employeeName}
              className='bg-slate-300 relative drop-shadow-lg text-center w-72 h-72 rounded-2xl flex flex-col justify-center mt-32'
            >
              <div className='rounded-full border-4 border-white  ring ring-yellow-300 ring-offset-2 absolute -top-20 left-16 h-40  w-40 '>
                <Image
                  src={member.employeeProfilePic}
                  layout='fill'
                  className='absolute rounded-full '
                />
              </div>
              <div className='mt-20 flex flex-col justify-around items-center'>
                <h3 className='text-2xl font-medium'>{member.employeeName}</h3>
                <p className='text-lg'>{member.employeeTitle}</p>
                <Link
                  href={`?employeeId=${member.employeeId}`}
                  // className='bg-green-400 text-white p-5'
                >
                  <a className='bg-green-600 text-white py-2 px-4 mt-4 rounded-md '>
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Teams;
