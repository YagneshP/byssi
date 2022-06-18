import client, {
  getClient,
  usePreviewSubscription,
  PortableText,
} from "../lib/sanity";
import { useRouter } from "next/router";
import { eventQuery } from "../lib/queries";

const events = (props) => {
  const { eventdata, preview } = props;

  const router = useRouter();

  const { data: events } = usePreviewSubscription(eventQuery, {
    initialData: eventdata,
    enabled: preview || router.query.preview !== undefined,
  });
  return (
    <>
      {events &&
        events.map((event) => (
          <article>
            <h3 className='text-lg'> {event.name} </h3>
            <p className='mt-3'>{event.host}</p>
          </article>
        ))}
    </>
  );
  // return (
  //   <main className='grow mt-16 sm:mt-24 flex pt-6 flex-col items-center border-slate-200 border-t-'>
  //     <section className='h-screen'>
  //       <div className='px-6 sm:px-4 xl:px-0 w-full max-w-screen-lg mb-16'>
  //         <div className='pt-3 pb-1..5 bg-white z-10'>
  //           <div className='flex flex-row  pb-6'>
  //             <div>
  //               <button className='outline-none mr-4 text-xl font-medium border-b-4 border-rose-60'>
  //                 Events
  //               </button>
  //             </div>
  //           </div>
  //           <div className='flex'>
  //             {/* events */}
  //             <div className='p-0 bg-clip-padding bg-cover relative h-full flex bg-white z-0 break-words w-full flex-row justify-start py-4 border-t border-gray3 md:pt-4 md:pb-5'>
  //               <a className='w-full inline cursor-pointer relative hover:no-underline'>
  //                 <div className='flex w-full flex-col'>
  //                   <div className='flex flex-row-reverse md:flex-row flex-1 overflow-hidden'>
  //                     <div className='bg-red-100 ml-3 md:mr-3 md:ml-0'>
  //                       <div className='relative overflow-hidden bg-transparent w-full h-92'>
  //                         <picture>
  //                           {/* <source
  //                           srcSet='https://secure-content.meetupstatic.com/images/classic-events/504673917/222x125.webp, https://secure-content.meetupstatic.com/images/classic-events/504673917/333x188.webp 1.5x, https://secure-content.meetupstatic.com/images/classic-events/504673917/444x250.webp 2x'
  //                           type='image/webp'
  //                         />
  //                         <source
  //                           srcSet='https://secure-content.meetupstatic.com/images/classic-events/504673917/222x125.jpg, https://secure-content.meetupstatic.com/images/classic-events/504673917/333x188.jpg 1.5x, https://secure-content.meetupstatic.com/images/classic-events/504673917/444x250.jpg 2x'
  //                           type='image/jpeg'
  //                         /> */}
  //                           <img
  //                             src='https://secure-content.meetupstatic.com/images/classic-events/504673917/222x125.jpg'
  //                             style={{ width: "200px", height: "150px" }}
  //                             alt='Tips &amp; Hacks on how to Increase Productivity as an Insurance Adjuster or Agent'
  //                             loading='lazy'
  //                             className='rounded-t-lg rounded-lg w-full absolute top-0 left-0 object-contain object-center'
  //                           />
  //                         </picture>
  //                         <div
  //                           className='absolute top-2 left-2 right-2 hidden md:flex'
  //                           aria-label='Online Event'
  //                           data-testid='online-indicator'
  //                         >
  //                           <div className='flex flex-row items-center z-10 text-xs rounded font-medium truncate py-0.5 pr-2 pl-1 bg-white'>
  //                             <div
  //                               className='mr-1'
  //                               style={{ width: "16px", height: "16" }}
  //                             >
  //                               <div>x</div>
  //                             </div>
  //                             <span className='text-gray6 truncate'>
  //                               Online Event
  //                             </span>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                     <div className='overflow-hidden w-full'>
  //                       <div className='flex justify-between md:items-center flex-col-reverse md:flex-row '>
  //                         <div className='flex flex-col uppercase text-sm leading-5 tracking-tight text-darkGold font-medium pb-1 pt-1'>
  //                           <time
  //                             className=''
  //                             datetime='2022-06-16T17:30:00-04:00[America/Toronto]'
  //                             title='Thu Jun 16 2022 17:30:00 GMT-0400 (Eastern Daylight Time)'
  //                           >
  //                             Thu, Jun 16 · 5:30 PM EDT
  //                           </time>
  //                         </div>
  //                       </div>
  //                       <p className='text-gray7 font-medium text-base pt-0 pb-1 line-clamp-3'>
  //                         Tips &amp; Hacks on how to Increase Productivity as an
  //                         Insurance Adjuster or Agent
  //                       </p>
  //                       <div className='w-full  text-sm  mx-auto mb-2 md:mb-4'>
  //                         <p className='hidden md:line-clamp-1 text-gray6'>
  //                           <span className='s1uol3r6'>Group name:</span>Claims
  //                           Insurance Agents Meetup Group • Toronto, ON
  //                         </p>
  //                         <p className='hidden md:line-clamp-1 text-viridian '>
  //                           New Group
  //                         </p>
  //                         <p className='line-clamp-1 md:hidden'>
  //                           <span className='s1uol3r6'>Group name:</span>Claims
  //                           Insurance Agents Meetup Group
  //                         </p>
  //                         <p className='line-clamp-1 md:hidden'>Toronto, ON</p>
  //                         <p className='line-clamp-1 md:hidden text-viridian '>
  //                           New Group
  //                         </p>
  //                       </div>
  //                       <div className='hidden sm:block'>
  //                         <div className='h-full w-full flex items-end'>
  //                           <div className='w-full flex flex-col'>
  //                             <div className='flex items-center'>
  //                               <div className='flex flex-row'>
  //                                 <div className='text-gray6 text-sm'>
  //                                   <div
  //                                     aria-label='5 attendees'
  //                                     className='text-gray6 text-sm'
  //                                   >
  //                                     5 attendees
  //                                   </div>
  //                                 </div>
  //                               </div>
  //                             </div>
  //                             <div
  //                               className='md:hidden xs:p-0 mt-1'
  //                               aria-label='Online Event'
  //                               data-testid='online-indicator'
  //                             >
  //                               <div className='flex flex-row items-center z-10 text-xs rounded font-medium truncate py-0.5 pr-2 pl-1 bg-white'>
  //                                 <div
  //                                   className='mr-1'
  //                                   style={{ width: "16", height: "16" }}
  //                                 >
  //                                   <div>x</div>
  //                                 </div>
  //                                 <span className='text-gray6 truncate'>
  //                                   Online Event
  //                                 </span>
  //                               </div>
  //                             </div>
  //                           </div>
  //                           <div className='flex items-center absolute bottom-0 right-0 z-10 gap-3'>
  //                             <button
  //                               className='fill-current text-gray5 hover:text-gray6'
  //                               aria-label='Share event'
  //                               tabindex='0'
  //                               data-element-name='categorySearch-share-click'
  //                               data-event-label='Share icon'
  //                               data-testid='share-btn'
  //                             >
  //                               <div className='flex items-center'>
  //                                 <div id='share-in-event-search-results'>
  //                                   <div>x</div>
  //                                 </div>
  //                               </div>
  //                             </button>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </a>
  //             </div>
  //           </div>

  //         </div>
  //       </div>
  //     </section>
  //   </main>
  // );
};

export async function getStaticProps({ params, preview = false }) {
  const event = await getClient(preview).fetch(eventQuery);

  return {
    props: {
      eventdata: event,
      preview,
    },
    revalidate: 10,
  };
}

export default events;
