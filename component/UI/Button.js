import React from "react";

const Button = ({ children }) => {
  return (
    <button className='bg-orange-400 border-solid border-0 rounded-full py-3 px-9 text-white font-medium'>
      {children}
    </button>
  );
};

export default Button;
