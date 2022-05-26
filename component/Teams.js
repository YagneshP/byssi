import Image from "next/image";
import React from "react";
import chenai from "../public/chennai.png";
import emma from "../public/emma.png";
import crystel from "../public/crystel.png";
import parker from "../public/parker.png";
import sheldon from "../public/sheldon.png";

const Teams = () => {
  const teamMembers = [
    {
      employeeName: "Chenai Kadungure",
      employeeTitle: "Senior Manager",
      employeeProfilePic: chenai,
      full: true,
    },
    {
      employeeName: "Emma Mauze",
      employeeTitle: "Administrative Coordinator",
      employeeProfilePic: emma,
      full: true,
    },
    {
      employeeName: "Sheldon Caruna",
      employeeTitle: "Youth Engagement Coordinator",
      employeeProfilePic: sheldon,
    },
    {
      employeeName: "Crystel Campbell",
      employeeTitle: "Youth Engagement Coordinator",
      employeeProfilePic: crystel,
    },
    {
      employeeName: "Jeniece Parker",
      employeeTitle: "Youth Engagement Coordinator",
      employeeProfilePic: parker,
    },
  ];
  return (
    <section className='conatainer mx-auto h-full mb-10'>
      <h2 className='text-4xl text-center font-extrabold mt-16 '>
        Meet our Team
      </h2>
      <div className='flex flex-row flex-wrap items-center justify-around mt-8 container mx-auto '>
        {teamMembers.map((member) => (
          <div className='bg-slate-300 relative drop-shadow-lg text-center w-72 h-52 rounded-2xl flex flex-col justify-center mt-32'>
            <div className='rounded-full border-4 border-white  ring ring-yellow-300 ring-offset-2 absolute -top-20 left-16 h-40  w-40 '>
              <Image
                src={member.employeeProfilePic}
                layout='fill'
                className='absolute rounded-full '
              />
            </div>
            <div className='mt-16'>
              <h3 className='text-2xl font-medium'>{member.employeeName}</h3>
              <p className='text-lg'>{member.employeeTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teams;
