import React from "react";
import EventHeader from "./EventHeader";
import EventList from "./EventList";

const Events = ({ events }) => {
  return (
    <main className='grow mt-16 sm:mt-24 flex pt-6 flex-col items-center border-slate-200 border-t-'>
      <section className='h-screen'>
        <div className='px-6 sm:px-4 xl:px-0 w-full max-w-screen-lg mb-16'>
          <div className='pt-3 pb-1..5 bg-white z-10'>
            <EventHeader />
            <EventList events={events} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Events;
