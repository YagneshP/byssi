import Image from "next/image";
import React from "react";
import Goals from "../component/Goals";
import Teams from "../component/Teams";
// import about_us from "../public/about_us.jpg";
import chenai from "../public/chennai.png";
import emma from "../public/emma.png";
import crystel from "../public/crystel.png";
import parker from "../public/parker.png";
import sheldon from "../public/sheldon.png";
import Modal from "../component/UI/Modal";
import { useRouter } from "next/router";

const About = ({ teamMembers }) => {
  let router = useRouter();

  /**
   * Using getStaticProps
   * and getStaticPaths for team members
   */
  return (
    <>
      {router.query.employeeId && (
        <Modal
          teamMember={teamMembers[parseInt(router.query.employeeId) - 1]}
          onClose={() => router.push("/about")}
        />
      )}
      <main className='grow mt-16 sm:mt-24'>
        <section className='h-full flex flex-col'>
          <div className='h-96 bg-cover bg-center bg-[url("../public/about_us.jpg")]'></div>
          <div className='h-full container mx-auto'>
            <h2 className=' text-3xl text-center font-extrabold text-slate-600 mt-10 mb-6'>
              {" "}
              Who we are ?
            </h2>
            <p className=' tex-sm md:text-lg text-center mx-6 mb-12'>
              The Black Youth School Success Initiative (BYSSI) was created to
              foster and support the educational achievement of Black youth. As
              an ethno-specific collaborative, BYSSI partners with a community
              of Black-led/focused organizations to empower youth and fill
              identified service gaps in the Black community of Peel Region.
              Building the capacities of collaborating organizations by
              increasing their assets, attributes and abilities to respond to
              the complex needs of Black youth and families is at the core of
              BYSSI.
            </p>
          </div>
          <Goals />
          <Teams teamMembers={teamMembers} />
        </section>
      </main>
    </>
  );
};

//getStaticProps fn will get the info of team memebers. In future we can set to send request to the cms and get the details.

export async function getStaticProps(context) {
  const teamMembers = [
    {
      employeeId: 1,
      employeeName: "Chenai Kadungure",
      employeeTitle: "Senior Manager",
      employeeProfilePic: chenai,
      full: true,
    },
    {
      employeeId: 2,
      employeeName: "Emma Mauze",
      employeeTitle: "Administrative Coordinator",
      employeeProfilePic: emma,
      full: true,
    },
    {
      employeeId: 3,
      employeeName: "Sheldon Caruna",
      employeeTitle: "Youth Engagement Coordinator",
      employeeProfilePic: sheldon,
    },
    {
      employeeId: 4,
      employeeName: "Crystel Campbell",
      employeeTitle: "Youth Engagement Coordinator",
      employeeProfilePic: crystel,
    },
    {
      employeeId: 5,
      employeeName: "Jeniece Parker",
      employeeTitle: "Youth Engagement Coordinator",
      employeeProfilePic: parker,
    },
  ];
  return {
    props: {
      teamMembers,
    },
  };
}

export default About;
