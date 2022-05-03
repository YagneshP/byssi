import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <main className='grow'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
