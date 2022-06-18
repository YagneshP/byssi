import React from "react";

const EventImage = () => {
  return (
    <div className='relative overflow-hidden bg-transparent w-full h-92'>
      <picture>
        {/* <source
      srcSet='https://secure-content.meetupstatic.com/images/classic-events/504673917/222x125.webp, https://secure-content.meetupstatic.com/images/classic-events/504673917/333x188.webp 1.5x, https://secure-content.meetupstatic.com/images/classic-events/504673917/444x250.webp 2x'
      type='image/webp'
    />
    <source
      srcSet='https://secure-content.meetupstatic.com/images/classic-events/504673917/222x125.jpg, https://secure-content.meetupstatic.com/images/classic-events/504673917/333x188.jpg 1.5x, https://secure-content.meetupstatic.com/images/classic-events/504673917/444x250.jpg 2x'
      type='image/jpeg'
    /> */}
        <img
          src='https://secure-content.meetupstatic.com/images/classic-events/504673917/222x125.jpg'
          style={{ width: "200px", height: "150px" }}
          alt='Tips &amp; Hacks on how to Increase Productivity as an Insurance Adjuster or Agent'
          loading='lazy'
          className='rounded-t-lg rounded-lg w-full absolute top-0 left-0 object-contain object-center'
        />
      </picture>
      <div
        className='absolute top-2 left-2 right-2 hidden md:flex'
        aria-label='Online Event'
        data-testid='online-indicator'
      >
        <div className='flex flex-row items-center z-10 text-xs rounded font-medium truncate py-0.5 pr-2 pl-1 bg-white'>
          <div className='mr-1' style={{ width: "16px", height: "16" }}>
            <div>x</div>
          </div>
          <span className='text-gray6 truncate'>Online Event</span>
        </div>
      </div>
    </div>
  );
};

export default EventImage;
