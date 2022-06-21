import { urlFor } from "../../lib/sanity";
import EventHost from "./EventHost";
import EventImage from "./EventImage";
import EventTime from "./EventTime";
import EventTitle from "./EventTitle";

const EventItem = ({ event }) => {
  const { name, date, host, poster } = event;
  return (
    <div className='p-0 bg-clip-padding bg-cover relative h-full flex bg-white z-0 break-words w-full flex-row justify-start py-4 border-t border-gray3 md:pt-4 md:pb-5'>
      <a className='w-full inline cursor-pointer relative hover:no-underline'>
        <div className='flex w-full flex-col'>
          <div className='flex flex-row-reverse md:flex-row flex-1 overflow-hidden'>
            <div className=' ml-3 md:mr-3 md:ml-0 w-56'>
              <EventImage title={name} image={poster} />
            </div>
            <div className='overflow-hidden w-full'>
              <EventTime time={date} />
              <EventTitle title={name} />
              <EventHost host={host} />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default EventItem;
