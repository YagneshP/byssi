import React from "react";
import EventItem from "./EventItem";

const EventList = ({ events }) => {
  let eventList = !events ? (
    <h3>No event</h3>
  ) : (
    events.map((ev) => <EventItem key={ev.name} event={ev} />)
  );

  return <div className='flex flex-col'>{eventList}</div>;
};

export default EventList;
