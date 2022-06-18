import React from "react";

const EventTime = ({ time }) => {
  return (
    <div className='flex justify-between md:items-center flex-col-reverse md:flex-row '>
      <div className='flex flex-col uppercase text-sm leading-5 tracking-tight text-darkGold font-medium pb-1 pt-1'>
        <time
          className=''
          // datetime='2022-06-16T17:30:00-04:00[America/Toronto]'
          // title='Thu Jun 16 2022 17:30:00 GMT-0400 (Eastern Daylight Time)'
        >
          {time}
        </time>
      </div>
    </div>
  );
};

export default EventTime;
