import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div className='flex flex-col'>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
