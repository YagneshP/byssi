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
        </div>
      </div>
    </section>
  );
}

export default About;
