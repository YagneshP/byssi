import React from "react";

const EventHost = () => {
  return (
    <div className='w-full  text-sm  mx-auto mb-2 md:mb-4'>
      <p className='hidden md:line-clamp-1 text-gray6'>
        <span className='s1uol3r6'>Group name:</span>Claims Insurance Agents
        Meetup Group • Toronto, ON
      </p>
      <p className='hidden md:line-clamp-1 text-viridian '>New Group</p>
      <p className='line-clamp-1 md:hidden'>
        <span className='s1uol3r6'>Group name:</span>Claims Insurance Agents
        Meetup Group
      </p>
      <p className='line-clamp-1 md:hidden'>Toronto, ON</p>
      <p className='line-clamp-1 md:hidden text-viridian '>New Group</p>
    </div>
  );
};

export default EventHost;

{
  /* <div className='hidden sm:block'>
<div className='h-full w-full flex items-end'>
  <div className='w-full flex flex-col'>
    <div className='flex items-center'>
      <div className='flex flex-row'>
        <div className='text-gray6 text-sm'>
          <div
            aria-label='5 attendees'
            className='text-gray6 text-sm'
          >
            5 attendees
          </div>
        </div>
      </div>
    </div>
    <div
      className='md:hidden xs:p-0 mt-1'
      aria-label='Online Event'
      data-testid='online-indicator'
    >
      <div className='flex flex-row items-center z-10 text-xs rounded font-medium truncate py-0.5 pr-2 pl-1 bg-white'>
        <div
          className='mr-1'
          style={{ width: "16", height: "16" }}
        >
          <div>x</div>
        </div>
        <span className='text-gray6 truncate'>
          Online Event
        </span>
      </div>
    </div>
  </div>
  <div className='flex items-center absolute bottom-0 right-0 z-10 gap-3'>
    <button
      className='fill-current text-gray5 hover:text-gray6'
      aria-label='Share event'
      tabindex='0'
      data-element-name='categorySearch-share-click'
      data-event-label='Share icon'
      data-testid='share-btn'
    >
      <div className='flex items-center'>
        <div id='share-in-event-search-results'>
          <div>x</div>
        </div>
      </div>
    </button>
  </div>
</div>
</div> */
}
