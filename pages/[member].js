import { useRouter } from "next/router";
import chenai from "../public/chennai.png";
import emma from "../public/emma.png";
import crystel from "../public/crystel.png";
import parker from "../public/parker.png";
import sheldon from "../public/sheldon.png";

const memeber = ({ teamMember }) => {
  return (
    <section>
      <h1>{teamMember?.employeeName}</h1>
      <h3>{teamMember?.employeeTitle}</h3>
    </section>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { member: "1" } },
      { params: { member: "2" } },
      { params: { member: "3" } },
      { params: { member: "4" } },
      { params: { member: "5" } },
      // { params: { member: "6" } },
    ],
    fallback: "blocking",
  };
}

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
      teamMember: teamMembers[parseInt(context.params.member) - 1],
    },
  };
}

export default memeber;
