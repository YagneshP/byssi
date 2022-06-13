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
      employeeDescription: [
        "Chenai is a soldier for positive peace who has headed up multiple international economic and community development non-profit programs in Sub-Saharan Africa, The Caribbean and North America. With a passion for leadership, strategy, partnerships and sustainable non-profits practicing a culture of care, she is happy to serve Black Youth Success. She has extensive experience in research, leadership development, education, economic development and non-profit management. In her spare time she sits on various boards, mentors and coaches.",
        "Chenai has been involved in non-profit work since she was a teenager in Zimbabwe. In high school she was an Interact member where she chose “Service Above Self”. This attraction to serving and empowering the world has never left her.",
        " Chenai holds a BA degree in Media, Sociology and Gender Studies and an MPhil in Diversity Studies from the University of Cape Town in South Africa. She completed her MA in Global Studies with certification in International Development at Duke University and UNC Chapel Hill’s Peace Center. Her capstone Project focussed on transformational leadership, and she hopes this work will facilitate positive social change where she leads. Most recently, she was an Associate Director, Programs and Services at Skills for Change in Toronto where she headed Employment Ontario.",
      ],
      full: true,
    },
    {
      employeeId: 2,
      employeeName: "Emma Mauze",
      employeeTitle: "Administrative Coordinator",
      employeeProfilePic: emma,
      employeeDescription: [
        "After graduating from Western University with a B.A. in English, Emma’s career led her to work with many social services organizations around the GTA. Having worked on a variety of projects, she’s excited to settle into a Black run and focused initiative. There is tremendous room for growth within the Black community and BYS itself, and Emma is looking forward to assisting the organization’s expansion.",
      ],
      full: true,
    },
    {
      employeeId: 3,
      employeeName: "Sheldon Caruna",
      employeeTitle: "Youth Engagement Coordinator",
      employeeProfilePic: sheldon,
      employeeDescription: [
        "Sheldon Caruana’s educational journey started at Sheridan College with completion of a 3-year Child and Youth Worker program. From there, he went to work as Youth Amplifier working for the Ontario Provincial Child Advocate for Children and Youth, advocating for systemic change of Ontario’s child welfare system to address gaps, inequities, and poor outcomes experienced by youth. Motivated by the courageous youth leaders, he went on to pursue his BA in Child and Youth Care at Ryerson University. During his studies, he deepened his understanding of research, racial inequities, and developed passion for community building through agriculture. Currently, he is focused on building the capacity of the Black community in Peel, through the development of a Black-led youth farming project in Peel and access to higher education. He hopes to continue to deepen his understanding of local issues that his community faces and uplift the next generation through access to leadership opportunities, the creation of safe community space and meaningful education.",
      ],
    },
    {
      employeeId: 4,
      employeeName: "Crystel Campbell",
      employeeTitle: "Youth Engagement Coordinator",
      employeeProfilePic: crystel,
      employeeDescription: [
        "Crystel studied at the University of Guelph-Humber and received an Honours Bachelor of Applied Science Degree in Psychology and a General Arts and Science Diploma. After completing her bachelor's degree, she attended Sheridan College Institute of Technology and Advanced Learning and earned a Diploma in Community and Justice Services. Prior to becoming a Community Animator, Crystel served as a youth program coordinator overseeing after school programs. Crystel also developed and facilitated youth programs for Roots Community Services, a community organization that delivers programs and services to the Black and Caribbean communities in Peel Region. Crystel’s program facilitation focused primarily on arts, literacy, and tutoring.",
      ],
    },
    {
      employeeId: 5,
      employeeName: "Jeniece Parker",
      employeeTitle: "Youth Engagement Coordinator",
      employeeProfilePic: parker,
      employeeDescription: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ],
    },
  ];
  return {
    props: {
      teamMembers,
    },
  };
}

export default About;
