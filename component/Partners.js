import Image from "next/image";
import React from "react";
import partner1 from "../public/partner-1.svg";
import partner2 from "../public/partner-2.svg";
import partner3 from "../public/partner-3.svg";
import partner4 from "../public/partner-4.svg";
import partner5 from "../public/partner-5.svg";
import partner6 from "../public/partner-6.svg";
import partner7 from "../public/partner-7.svg";
import communityPartner1 from "../public/COMMUNITYPARTNERS-01.svg";
import communityPartner2 from "../public/COMMUNITYPARTNERS-02.svg";
import communityPartner3 from "../public/COMMUNITYPARTNERS-03.svg";
import communityPartner4 from "../public/COMMUNITYPARTNERS-04.svg";
import communityPartner5 from "../public/COMMUNITYPARTNERS-05.svg";
import communityPartner6 from "../public/COMMUNITYPARTNERS-06.svg";
import communityPartner7 from "../public/COMMUNITYPARTNERS-07.svg";
import communityPartner8 from "../public/COMMUNITYPARTNERS-08.svg";
import communityPartner9 from "../public/COMMUNITYPARTNERS-09.svg";

const Partners = () => {
  const blackEdPartners = [
    {
      name: "Aspire 4 Higher",
      web_address: "https://www.a4hbasketball.com/",
      logo: partner1,
    },
    {
      name: "BLACK Community Action Network of PEEL",
      web_address: "https://www.facebook.com/bcanpeel/",
      logo: partner2,
    },
    {
      name: "Free For All Foundation",
      web_address: "https://www.ffaf.ca/",
      logo: partner3,
    },
    {
      name: "Skills For Life",
      web_address: "https://www.theskills4life.ca/",
      logo: partner4,
    },
    {
      name: "ResQ Youth International",
      web_address: "https://www.resqyouth.com/",
      logo: partner5,
    },
    {
      name: "En'tyce",
      web_address: "https://www.ouremcs.ca/",
      logo: partner6,
    },
    {
      name: "Roots Community Services",
      web_address: "https://rootscs.org/",
      logo: partner7,
    },
  ];

  const collaborativePartners = [
    {
      name: "Peel District School Board",
      web_address: "https://peelschools.org/Pages/default.aspx",
      logo: communityPartner1,
    },
    {
      name: "Dufferin-Peel Catholic District School Board",
      web_address: "https://www.dpcdsb.org/",
      logo: communityPartner2,
    },
    {
      name: "Family Education Centre",
      web_address: "https://familyedcentre.org/",
      logo: communityPartner3,
    },
    {
      name: "BGC Peel ",
      web_address: "http://www.bgcpeel.org/",
      logo: communityPartner4,
    },
    {
      name: "Erin Mills Youth Centre",
      web_address: "https://www.emyc.ca/",
      logo: communityPartner5,
    },
    {
      name: "United Way Greater Toronto",
      web_address: "https://www.unitedwaygt.org/",
      logo: communityPartner6,
    },
    {
      name: "Big Brothers Big Sisters of Peel",
      web_address: "https://peel.bigbrothersbigsisters.ca/",
      logo: communityPartner8,
    },
    {
      name: "Malton Neighbourhood Services",
      web_address: "https://www.mnsinfo.org/",
      logo: communityPartner9,
    },
  ];
  return (
    <section className='h-full mb-12'>
      <div className='container mx-auto pt-16 h-full'>
        <h2 className='text-2xl font-semibold text-orange-600 relative '>
          <span className='block absolute w-12 rounded-md h-1 bg-orange-400 top-4 '></span>
          <span className='ml-16'>Our Partners</span>
        </h2>
        <div className='mt-16'>
          <h3 className='text-2xl font-bold underline underline-offset-4  text-slate-700 mb-12'>
            Black Led Partners{" "}
          </h3>
          <div className='flex flex-row  flex-wrap justify-around gap-8  sm:justify-between  md:gap-12 text-slate-600'>
            {blackEdPartners.map((partner) => (
              <a
                key={partner.name}
                href={partner.web_address}
                target='_blank'
                className='hover:scale-125 transition ease-in-out delay-100'
              >
                <Image src={partner.logo} width={100} height={100} />
              </a>
            ))}
          </div>
        </div>
        <div className='mt-16'>
          <h3 className='text-2xl font-bold underline underline-offset-4  text-slate-700 mb-12'>
            Collaborative Partners{" "}
          </h3>
          <div className='flex flex-row  flex-wrap justify-around gap-8 sm:justify-between  md:gap-12 text-slate-600'>
            {collaborativePartners.map((partner) => (
              <a
                key={partner.name}
                href={partner.web_address}
                target='_blank'
                className='hover:scale-125 transition ease-in-out delay-100'
              >
                <Image src={partner.logo} width={100} height={100} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
