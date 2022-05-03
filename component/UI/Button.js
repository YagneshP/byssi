import React from "react";

const Button = ({ children }) => {
  return (
    <button className='bg-green-400 shadow-md shadow-green-400/40 rounded-full py-3 px-9 text-black font-medium hover:text-white'>
      {children}
    </button>
  );
};

export default Button;
