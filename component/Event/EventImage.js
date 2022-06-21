import React from "react";
import { urlFor } from "../../lib/sanity";

const EventImage = ({ title, image }) => {
  return (
    <div
      className='relative overflow-hidden bg-transparent'
      style={{ height: 125 }}
    >
      <picture>
        <source
          srcSet={urlFor(image).width(200).height(300).url()}
          type='image/webp'
        />
        <source
          srcSet={urlFor(image).width(200).height(300).url()}
          type='image/jpeg'
        />
        <img
          src={urlFor(image).width(200).height(300).url()}
          style={{ width: "200px", height: "150px" }}
          alt={title}
          loading='lazy'
          className='rounded-t-lg rounded-lg w-full absolute top-0 left-0 object-contain object-center'
        />
      </picture>
      {/* <div
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
      </div> */}
    </div>
  );
};

export default EventImage;
