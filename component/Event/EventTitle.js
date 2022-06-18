import React from "react";

const EventTitle = ({ title }) => {
  return (
    <p className='text-gray7 font-medium text-base pt-0 pb-1 line-clamp-3'>
      {title}
    </p>
  );
};

export default EventTitle;
