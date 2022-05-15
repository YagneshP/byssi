import Image from "next/image";
import React from "react";
import about_us from "../public/about_us.jpg";
function About() {
  return (
    <section className='container mx-auto'>
      <h2>About us</h2>
      <div className='flex'>
        <div>
          <Image src={about_us} width={400} height={300} />
        </div>
        <div>
          <h3>Description</h3>
          <p>
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
